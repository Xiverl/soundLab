import asyncio

from django.shortcuts import render, redirect
from django.http import HttpResponse

from feedback.forms import UserInfoForm
from feedback.utils import send_email, send_telegram_message
from feedback.models import UserFeedback


def submit_info(request) -> HttpResponse:
    '''Обработчик данных пользователя из формы.'''

    template_name: str = 'feedback/submit.html'
    form: UserInfoForm = UserInfoForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            info: UserFeedback = form.save(commit=False)
            info.save()
            send_email(info)
            asyncio.run(send_telegram_message(info))
            return redirect('pages:succes')
    context: dict = {
        'form': form
    }
    return render(request, template_name, context)

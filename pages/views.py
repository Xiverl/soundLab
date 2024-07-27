from django.shortcuts import render
from django.http import HttpResponse
from feedback.forms import UserInfoForm


def about(request) -> HttpResponse:
    '''Вывод страницы "О нас" на сайт.'''

    template_name: str = 'pages/about.html'
    form: UserInfoForm = UserInfoForm
    context = {'form': form}
    return render(request, template_name, context)


def succes(request) -> HttpResponse:
    '''Страница успешной обработки данных.'''

    template_name: str = 'pages/succes.html'
    return render(request, template_name)

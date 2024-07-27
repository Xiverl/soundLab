from django.shortcuts import render
from django.http import HttpResponse


def about(request) -> HttpResponse:
    '''Вывод страницы "О нас" на сайт.'''

    template_name: str = 'pages/about.html'
    return render(request, template_name)


def succes(request) -> HttpResponse:
    '''Страница успешной обработки данных.'''

    template_name: str = 'pages/succes.html'
    return render(request, template_name)

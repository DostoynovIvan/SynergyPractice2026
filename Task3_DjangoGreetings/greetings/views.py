from django.shortcuts import render, redirect
from .forms import NameForm
from .models import UserName

def index(request):
    last_name = None
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            # Сохраняем имя в БД
            user_name = form.save()
            last_name = user_name.name
            # Очищаем форму после успешной отправки
            form = NameForm()
        else:
            # Если форма невалидна, она уже содержит ошибки
            pass
    else:
        form = NameForm()

    return render(request, 'greetings/index.html', {
        'form': form,
        'last_name': last_name,
    })
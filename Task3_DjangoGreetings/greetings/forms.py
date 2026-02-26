from django import forms
from .models import UserName

class NameForm(forms.ModelForm):
    class Meta:
        model = UserName
        fields = ['name']
        labels = {
            'name': 'Введите ваше имя'
        }
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'name-input',
                'placeholder': 'Иван Иванов'
            })
        }
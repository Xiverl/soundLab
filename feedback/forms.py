from django import forms

from feedback.models import UserFeedback


class UserInfoForm(forms.ModelForm):

    class Meta:
        model = UserFeedback
        fields = (
            'fio',
            'mobile',
        )

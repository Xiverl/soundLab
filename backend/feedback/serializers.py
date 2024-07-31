from rest_framework import serializers

from feedback.models import UserFeedback


class UserInfoSerializer(serializers.ModelSerializer):
    """Сериализатор для формы обратной связи."""

    class Meta:
        model = UserFeedback
        fields = ('fio', 'mobile')

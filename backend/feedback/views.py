import asyncio

from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework import viewsets, status
from rest_framework.response import Response
from telegram import Bot

from feedback.models import UserFeedback
from feedback.serializers import UserInfoSerializer


class SubmitViewSet(viewsets.ViewSet):
    """Обработчик формы обратной связи."""

    serializer_class = UserInfoSerializer

    def get_method_actions(self):
        return ['post']

    def create(self, request):
        serializer = UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            self.send_email(serializer)
            asyncio.run(self.send_telegram_message(serializer))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_email(self, user_info: UserInfoSerializer) -> None:
        """Метод для отправки данных на почту."""

        subject: str = 'Новый клиент'
        html_message: str = render_to_string(
            'email_templates/feedback_email.html',
            {
                'fio': user_info.validated_data['fio'],
                'mobile': user_info.validated_data['mobile']
            }
        )
        from_email: str = settings.EMAIL_HOST_USER
        to_email: list = [settings.EMAIL_ADMIN]
        send_mail(
            subject,
            message=None,
            from_email=from_email,
            recipient_list=to_email,
            html_message=html_message,
            fail_silently=False,
        )

    async def send_telegram_message(
        self, user_info: UserInfoSerializer
    ) -> None:
        """Метод для отправки данных в telegram."""

        fio = user_info.validated_data['fio']
        mobile = user_info.validated_data['mobile']
        message: str = f'''
Новый пользователь заинтересован в наших услугах!
ФИО: {fio}
Номер телефона: {mobile}
    '''
        bot: Bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)

        try:
            await bot.send_message(
                chat_id=settings.ADMIN_TELEGRAM_CHAT_ID,
                text=message
            )
        except Exception as e:
            print(f'{e}')

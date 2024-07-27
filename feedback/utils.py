from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from telegram import Bot

from feedback.models import UserFeedback


def send_email(user_info: UserFeedback) -> None:
    """Метод для отправки данных на почту."""

    subject: str = 'Новый клиент'
    html_message: str = render_to_string(
        'email_templates/feedback_email.html',
        {
            'user_info': user_info
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


async def send_telegram_message(user_info: UserFeedback) -> None:
    """Метод для отправки данных в telegram."""

    message: str = f'''
Новый пользователь заинтересован в наших услугах!
ФИО: {user_info.fio}
Номер телефона: {user_info.mobile}
'''
    bot: Bot = Bot(token=settings.TELEGRAM_BOT_TOKEN)

    try:
        await bot.send_message(
            chat_id=settings.ADMIN_TELEGRAM_CHAT_ID,
            text=message
        )
    except Exception as e:
        print(f'{e}')

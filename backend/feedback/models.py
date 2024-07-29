from django.db.models import Model, CharField, IntegerField
from django.core.validators import RegexValidator


class UserFeedback(Model):
    """Модель для обратной связи по данным от пользователя."""

    fio = CharField(
        max_length=256,
        verbose_name="ФИО",
    )
    mobile = CharField(
        max_length=12,
        verbose_name="Номер телефона",
        blank=False,
        validators=(
            RegexValidator(
                regex=r'^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$',
                message='Номер телефона пользователя '
                'содержит недопустимый символ',
            ),
        ),
    )

    class Meta:
        verbose_name = "Обратная связь"
        verbose_name_plural = "Записи пользователей"

    def __str__(self):
        return f'{self.fio} - {self.mobile}'

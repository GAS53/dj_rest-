from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, UserManager
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models
from django.utils import timezone



class UserModel(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()

    username = models.CharField("username", max_length=64, unique=True,
        help_text="64 символа латиницей. Буквы, цифры и @/./+/-/_ .",
        validators=[username_validator],
        error_messages={"unique": "Пользователь с таким именем уже существует.",
        },
    )
    first_name = models.CharField(verbose_name="имя", max_length=64)
    last_name = models.CharField(verbose_name='фамилия', max_length=64)
    email = models.EmailField("email address", unique=True)

    is_admin = models.BooleanField(verbose_name='Администратор проектов', default=False, help_text="Администрирует сайт",)
    is_manager = models.BooleanField(verbose_name='Менеджер', default=False)
    is_developer = models.BooleanField(verbose_name='Разработчик', default=False)
    is_staff = models.BooleanField(verbose_name='Персонал', default=True)
    
    is_active = models.BooleanField("активный", default=True, help_text="Для использования сайта пользователь должен быть активным. выбрать это вместо удаления аккаунта.")
    date_joined = models.DateTimeField("дата создания", default=timezone.now)

    objects = UserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    class Meta:
        verbose_name = "пользователь"
        verbose_name_plural = "пользователи"

    def clean(self):
        super().clean()
        self.email = self.__class__.objects.normalize_email(self.email)

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        full_name = "%s %s" % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        """Return the short name for the user."""
        return self.first_name

    def __str__(self):
        return self.get_username()

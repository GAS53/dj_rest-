from .base import *

DATABASES = {
    'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': 'library',
    'USER': 'dante',
    'PASSWORD': 'dante123456',
    'HOST': 'db',
    'PORT': '5432',
    }
}

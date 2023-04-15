from django.urls import path

from invitation.views import *

app_name = 'invitation'

urlpatterns = [
    path('info/', InfoViewCreate.as_view()),
]
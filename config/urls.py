from django.contrib import admin
from django.urls import path, include

from invitation.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('invitation.urls')),
    path('', IndexView.as_view()),
    path('generator/', GeneratorView.as_view()),

]

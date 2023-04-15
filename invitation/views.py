from django.db.models import Sum
from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *

class InfoViewCreate(generics.CreateAPIView):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer

class IndexView(TemplateView):
    template_name = 'index.html'

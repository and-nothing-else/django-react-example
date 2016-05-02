from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^', IndexView.as_view()),
]

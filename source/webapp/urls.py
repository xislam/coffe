from django.urls import path
from webapp.views import EventsList, IndexListView, Contact, MenuList

app_name = 'webapp'

urlpatterns = [
    path('', IndexListView.as_view(), name="index"),
    path('<str:category>', MenuList.as_view(), name="category"),
    path('menu/', MenuList.as_view(), name="menu"),
    path('event/', EventsList.as_view(), name="event"),
    path('contact/', Contact.as_view(), name="contact")
]

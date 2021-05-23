from django.shortcuts import render
from django.views.generic import ListView, TemplateView

from webapp.models import Menu, Slider, MenuCategories, DailyEvents, SportEvents, TableReservation, OurLocation, \
    OpenTime, RESERVATIONS, AboutUs


class IndexListView(TemplateView):
    template_name = 'index.html'
    model = Slider
    ordering = ['-created_date']

    def get_context_data(self, **kwargs):
        context = super(IndexListView, self).get_context_data(**kwargs)
        context["sliders"] = Slider.objects.all()
        context['about_us'] = AboutUs.objects.all().first()

        return context


class EventsList(ListView):
    template_name = 'events.html'
    model = DailyEvents
    ordering = ['-created_date']

    def get_context_data(self, **kwargs):
        context = super(EventsList, self).get_context_data(**kwargs)
        context['daily_event'] = DailyEvents.objects.all()
        context['sport_events'] = SportEvents.objects.all()
        return context


class Contact(ListView):
    template_name = 'contact.html'
    model = RESERVATIONS
    ordering = ['-created_date']

    def get_context_data(self, **kwargs):
        context = super(Contact, self).get_context_data(**kwargs)
        context['our_location'] = OurLocation.objects.all().first()
        context['open_time'] = OpenTime.objects.all().first()
        context['reservations'] = RESERVATIONS.objects.all().first()
        context['table_reservation'] = TableReservation.objects.all().first()
        return context


class MenuList(ListView):
    template_name = 'menu.html'
    model = Menu
    ordering = ['-created_date']

    def get_context_data(self, **kwargs):
        context = super(MenuList, self).get_context_data(**kwargs)
        context["menu_categories"] = MenuCategories.objects.all()
        category = self.kwargs.get('category')
        if category:
            context["menu"] = Menu.objects.filter(menu_categories__name=category)
        else:
            context["menu"] = Menu.objects.filter(menu_categories__name="APPETIZERS")
        return context


from django.shortcuts import render
from django.views.generic import ListView

from webapp.models import Menu, Slider, MenuCategories, DailyEvents, SportEvents


class MenuListView(ListView):
    template_name = 'index.html'
    model = Menu
    ordering = ['-created_date']

    def get_context_data(self, **kwargs):
        context = super(MenuListView, self).get_context_data(**kwargs)
        context["sliders"] = Slider.objects.all()
        context["menu_categories"] = MenuCategories.objects.all()
        category = self.kwargs.get('category')
        if category:
            context["menu"] = Menu.objects.filter(menu_categories__name=category)
        else:
            context["menu"] = Menu.objects.filter(menu_categories__name="")
        return context


class Events(ListView):
    template_engine = ''
    model = DailyEvents
    ordering = ['-created_date']

    def get_context_data(self, **kwargs):
        context = super(Events, self).get_context_data(**kwargs)
        context['daily_events'] = DailyEvents.oblects.all()
        context['sport_events'] = SportEvents.objects.all()
        return  context


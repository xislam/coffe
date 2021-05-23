from webapp.models import *
from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget


class AboutUsAdminForm(forms.ModelForm):
    text = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = AboutUs
        fields = '__all__'


class AboutUsAdmin(admin.ModelAdmin):
    list_display = ['title']
    form = AboutUsAdminForm


@admin.register(MenuCategories)
class MenuCategoryAdmin(admin.ModelAdmin):
    list_display = 'name',


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = 'title', 'text', 'menu_categories', 'img', 'price', 'created_date',


@admin.register(DailyEvents)
class DailyEventsAdmin(admin.ModelAdmin):
    list_display = 'title', 'subtitle', 'text', 'data', 'img', 'created_date',


@admin.register(SportEvents)
class SportEventsAdmin(admin.ModelAdmin):
    list_display = 'title', 'text', 'img', 'created_date',


@admin.register(RESERVATIONS)
class RESERVATIONSAdmin(admin.ModelAdmin):
    list_display = 'text',


@admin.register(OpenTime)
class OpenTimeAdmin(admin.ModelAdmin):
    list_display = 'time',


@admin.register(TableReservation)
class TableReservationAdmin(admin.ModelAdmin):
    list_display = 'phone', 'email'


@admin.register(OurLocation)
class OurLocationAdmin(admin.ModelAdmin):
    list_display = 'text',


admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(Slider)
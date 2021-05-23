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


admin.site.register(AboutUs, AboutUsAdmin)
admin.site.register(Slider)
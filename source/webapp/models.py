from django.db import models

# Create your models here.


class MenuCategories(models.Model):
    name = models.CharField(max_length=500, verbose_name='name')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Menu Categories'
        verbose_name_plural = 'MenuCategories'


class Menu(models.Model):
    menu_categories = models.ForeignKey(MenuCategories, on_delete=models.CASCADE, related_name='menu_categories',
                                        verbose_name='menu categories')
    img = models.ImageField(upload_to='categories', verbose_name='img')
    title = models.CharField(max_length=400, verbose_name='title')
    subtitle = models.CharField(max_length=1000, verbose_name='subtitle')
    text = models.CharField(max_length=1000, verbose_name='text')
    price = models.IntegerField(verbose_name='price')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='created date')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Menu'
        verbose_name_plural = 'Menu'


class AboutUs(models.Model):
    title = models.CharField(max_length=400, verbose_name='title')
    text = models.CharField()

class
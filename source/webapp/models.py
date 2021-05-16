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

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'About Us'
        verbose_name_plural = 'About Us'


class DailyEvents(models.Model):
    img = models.ImageField(upload_to='events', verbose_name='img')
    title = models.CharField(max_length=400, verbose_name='title')
    subtitle = models.CharField(max_length=1000, verbose_name='subtitle')
    text = models.CharField(max_length=1000, verbose_name='text')
    data = models.CharField(max_length=1000, verbose_name='text_data')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='created date')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Daily Events'
        verbose_name_plural = 'Daily Events'


class SportEvents(models.Model):
    img = models.ImageField(upload_to='events', verbose_name='img')
    title = models.CharField(max_length=400, verbose_name='title')
    subtitle = models.CharField(max_length=1000, verbose_name='subtitle')
    text = models.CharField(max_length=1000, verbose_name='text')
    data = models.CharField(max_length=1000, verbose_name='text_data')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='created date')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Sport Events'
        verbose_name_plural = 'Sport Events'


class Slider(models.Model):
    img = models.ImageField(upload_to="slider", verbose_name="img")
    name = models.CharField(max_length=3000, verbose_name="name img")
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='created date')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Slider'
        verbose_name_plural = 'Slider'


class RESERVATIONS(models.Model):
    text = models.CharField(max_length=3000, verbose_name='text')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'RESERVATIONS'
        verbose_name_plural = 'RESERVATIONS'


class OpenTime(models.Model):
    time = models.CharField(max_length='300', verbose_name='open time')

    def __str__(self):
        return self.time

    class Meta:
        verbose_name = 'Open Time'
        verbose_name_plural = 'Open Time'


class OurLocation(models.Model):
    text = models.CharField(max_length='300', verbose_name='Our Location')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Our Location'
        verbose_name_plural = 'Our Location'


class TableReservation(models.Model):
    phone = models.CharField(max_length=300, verbose_name='phone')
    email = models.EmailField()

    def __str__(self):
        return self.phone

    class Meta:
        verbose_name = 'Table Reservation'
        verbose_name_plural = 'Table Reservation'

# Generated by Django 3.2.4 on 2021-07-01 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_auto_20210630_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/sample.jpg', null=True, upload_to=''),
        ),
    ]

# Generated by Django 3.1 on 2020-08-23 13:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0006_auto_20200823_1839'),
    ]

    operations = [
        migrations.DeleteModel(
            name='TweetQuerySet',
        ),
    ]

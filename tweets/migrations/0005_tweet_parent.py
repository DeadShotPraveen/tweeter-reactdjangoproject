# Generated by Django 3.1 on 2020-08-17 12:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0004_auto_20200817_1140'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweet',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tweets.tweet'),
        ),
    ]

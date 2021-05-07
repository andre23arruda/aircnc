# Generated by Django 3.2 on 2021-05-06 03:43

from django.db import migrations, models
import omnistack9.models


class Migration(migrations.Migration):

    dependencies = [
        ('omnistack9', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spot',
            name='techs',
            field=models.ManyToManyField(blank=True, null=True, related_name='spot_techs', to='omnistack9.Tech'),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.CharField(default=omnistack9.models.get_uuid_8_length, editable=False, max_length=8, primary_key=True, serialize=False),
        ),
    ]

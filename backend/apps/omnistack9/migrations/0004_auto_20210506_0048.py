# Generated by Django 3.2 on 2021-05-06 03:48

from django.db import migrations, models
import omnistack9.models


class Migration(migrations.Migration):

    dependencies = [
        ('omnistack9', '0003_user_id_new'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='id_new',
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.CharField(default=omnistack9.models.get_uuid_8_length, max_length=8, primary_key=True, serialize=False),
        ),
    ]

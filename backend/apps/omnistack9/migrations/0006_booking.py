# Generated by Django 3.2 on 2021-05-06 23:33

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('omnistack9', '0005_auto_20210506_0220'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_approved', models.BooleanField(default=False)),
                ('booking_date', models.DateField(default=datetime.date.today)),
                ('spot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='omnistack9.spot')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='omnistack9.user')),
            ],
        ),
    ]

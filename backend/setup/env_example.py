# RENAME THIS FILE TO env.py
# ADD your ipv4 address to os.environ['ALLOWED_HOSTS']
import os

os.environ['SECRET_KEY'] = '(_nz-7j=$7we1y6$8i%bftxt2l_udez1ou_x7@*_x8t+(0e2lk'
os.environ['DEBUG'] = 'true'
os.environ['ALLOWED_HOSTS'] = f'["192.168.0.12", "192.168.1.17", "127.0.0.1", "localhost"]'
os.environ['LANGUAGE_CODE'] = 'pt-br'
os.environ['TIME_ZONE'] = 'America/Sao_Paulo'

os.environ['CLOUDINARY'] = '' # '' is False
os.environ['CLOUD_NAME'] = 'your_cloud_name'
os.environ['API_KEY'] = 'your_api_key'
os.environ['API_SECRET'] = 'your_api_secret'
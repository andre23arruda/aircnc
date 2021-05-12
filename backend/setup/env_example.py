# RENAME THIS FILE TO env.py
import os, json

def create_allowed_hosts():
    '''Create a list of aloowed hosts'''
    IP_PATTERN = '192.168'
    hosts = ["127.0.0.1", "localhost"]
    for i in [0, 1]:
        for j in range(40):
            hosts.append(f'{ IP_PATTERN }.{ i }.{ j }')
    return hosts


os.environ['SECRET_KEY'] = '(_nz-7j=$7we1y6$8i%bftxt2l_udez1ou_x7@*_x8t+(0e2lk'
os.environ['DEBUG'] = 'true'
os.environ['ALLOWED_HOSTS'] = json.dumps(create_allowed_hosts())
os.environ['LANGUAGE_CODE'] = 'pt-br'
os.environ['TIME_ZONE'] = 'America/Sao_Paulo'

os.environ['CLOUDINARY'] = '' # '' is False
os.environ['CLOUD_NAME'] = 'your_cloud_name'
os.environ['API_KEY'] = 'your_api_key'
os.environ['API_SECRET'] = 'your_api_secret'
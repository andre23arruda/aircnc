<h1 align="center">
    <img alt="AirCnC" src="frontend/src/assets/logo-2.svg" width="200px" />
</h1>

<h4 align="center">
  🚀 Semana Omnistack 9
</h4>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Django](https://www.djangoproject.com/)
- [Django-Rest-Framework](https://www.django-rest-framework.org/)
- [Cloudinary](https://cloudinary.com/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto
**AirCnc foi feito para conectar empresas que dominam uma tecnologia e devs que buscam um local para aprender ou apenas alugar um local de trabalho.**

## Instalação
### Pré requisitos
Ter instalado:
- [Python](https://www.python.org/downloads/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Backend
#### Primeiro: modificar variáveis de ambiente (se houver)
-  **_backend/setup/env_example.py_**

#### Segundo: no terminal, rodar
```sh
# Entrar na pasta dos arquivos do backend
cd backend

# Criar um ambiente virtual
python -m venv venv

# Ativar o ambiente virtual
. venv/Scripts/activate
# ou . venv/bin/activate

# Instalar os pacotes necessários
pip install -r requirements.txt

# Executar as migrações
python manage.py migrate

# Rodar backend
. run.sh
```

![API 0](/images/api_0.png?raw=true)
![API 1](/images/api_1.png?raw=true)

### OBS:
Usei o Cloudinary para salvar as imagens dos Spots, mas não é necessário.


### Frontend
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do frontend
cd frontend

# Instalar os pacotes do projeto
yarn install

# Rodar
yarn start
```

![Web 1](/images/web_1.png?raw=true)

![Web 2](/images/web_1.png?raw=true)

![Web 3](/images/web_2.png?raw=true)

### Mobile
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do projeto mobile
cd mobile

# Instalar os pacotes do projeto
yarn install

# Rodar
expo start
```

#### Terceiro: rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app


![Mobile 0](/images/mobile_0.png?raw=true)

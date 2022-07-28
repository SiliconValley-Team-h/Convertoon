# Convertoon

**Convertoon** provides a service that translates webtoons to entertainment companies that want to export domestic webtoons.
You can check the translated webtoon image by selecting the webtoon image and language to translate and clicking the translation button. If there is an error in the extracted and translated texts, you can modify them on the modify page.

![convertoon](https://user-images.githubusercontent.com/87409442/181190110-1b80256b-42bd-4d3f-ad68-567007c9402f.gif)

## Index

- [Convertoon](#convertoon)
  - [Architecture](#architecture)
  - [File Structure](#file-structure)
  - [Installation](#Installation)
  - [Tech Stack](#tech-stack)
  - [Team Members](#team-members)
    <br>

## Architecture

<img src="https://user-images.githubusercontent.com/87409442/181192944-7ae3197b-6ef3-4de6-8ad3-96a8f6a51721.png" width="800" />

<br>

## File Structure

```
├── backend
│   ├── Dockerfile
│   ├── Font
│   ├── Pillow.ipynb
│   ├── README.md
│   ├── convertoon
│   ├── db.sqlite3
│   ├── manage.py
│   ├── media
│   ├── requirements.txt
│   ├── settings_debug.json
│   └── textExtract
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── README.md
│   ├── build
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── buttons
│   │   │   ├── common
│   │   │   ├── images
│   │   │   ├── layouts
│   │   │   └── states
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── pages
│   │   ├── services
│   │   ├── store
│   │   ├── styles
│   │   │   ├── colors
│   │   │   ├── common
│   │   │   ├── layout
│   │   │   └── states
│   │   └── utils
│   └── yarn.lock
└── nginx
    ├── Dockerfile
    └── default.conf

```

<br>

## Installation

### Github

- Clone Repository

```bash
git clone https://github.com/SiliconValley-Team-h/Convertoon.git
```

### Front-end setting

- API_Service.js

```js
...
export const BASE_URL = 'http://<url>';
...
```

### Back-end setting

- settings.py

```py
...
CORS_ORIGIN_WHITELIST = (
  'http://<url>',)
...
```

- settings_debug.json (Papago API key)

```json
{
  "NAVER": {
    "CLIENT_ID": "...",
    "CLIENT_SECRET": "..."
  }
}
```

### Docker

```docker
docker-compose up --build
```

<br>

## Tech Stack

```
Frontend : React
WSGI : Gunicorn
Web Server : Nginx
Backend : Django
Database : SQLite
AI : PyTorch
Etc : Docker, AWS
```

|Frontend|Backend|AI|DevOps|ETC|
|:---:|:---:|:---:|:---:|:---:|
|![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br>![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)|![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)<br>![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)<br>![Gunicorn](https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white)|![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)|![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)<br>![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)<br>![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)|![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)<br>![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)<br>![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)<br>![Postman](https://img.shields.io/badge/Postman-%23EE4C2C.svg?style=for-the-badge&logo=postman&logoColor=white)|
<br>


## Team Members

|Name|김예린|안효진|엄하늘|장동훈|
|:---------:|:---:|:---:|:---:|:---:|
|Github|[@Yerineee](https://github.com/Yerineee)|[@narlo23](https://github.com/narlo23)||[@jdonghun01](https://github.com/deafsloth)|
|Role|Frontend|Frontend|Backend|DevOps|

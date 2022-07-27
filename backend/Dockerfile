FROM python:3.8.8

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apt-get -y update
RUN apt-get -y install vim

RUN mkdir /backend
ADD . /backend

WORKDIR /backend

RUN pip install --upgrade pip
RUN pip install torch --no-cache-dir
RUN pip install torchvision --no-cache-dir
RUN pip install gunicorn
RUN pip install -r requirements.txt

EXPOSE 8000
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
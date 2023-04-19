FROM php:8.2-apache

WORKDIR /var/www/html
COPY . /var/www/html
COPY conf/vhost.conf /etc/apache2/sites-enabled/docker-vhost.conf
COPY ./php.ini /usr/local/etc/php/phpc.ini

RUN a2enmod headers deflate expires rewrite

RUN apt-get update &&\ 
    apt-get upgrade -y &&\
    apt-get -y install unzip &&\
    docker-php-ext-install -j$(nproc) opcache pdo_mysql

# RUN docker-php-ext-install pdo pdo_mysql

RUN cd /bin && mkdir composer && cd composer
RUN chmod 777 /bin/composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN php -r "unlink('composer-setup.php');"
# RUN rm composer-setup.php

ENV COMPOSER_ALLOW_SUPERUSER 1
RUN composer install --no-dev --prefer-dist --optimize-autoloader --no-scripts

#RUN apt-get install openssh-server --no-dev --prefer-dist --optimize-autoloader --no-scripts

#RUN ./vendor/bin/phpunit ./tests

#RUN service ssh start

EXPOSE 22
EXPOSE 80
CMD apachectl -D FOREGROUND
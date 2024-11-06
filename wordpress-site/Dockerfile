# A Dockerfile is a text document with a series of commands used to build a Docker image

# Use the WordPress base image
FROM wordpress:latest

# Copy your WordPress files into the container
COPY ./wordpress-site /var/www/html

# Set permissions if necessary
RUN chown -R www-data:www-data /var/www/html

# Expose the default WordPress port
EXPOSE 80

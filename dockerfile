# Use the official Nginx image as the base image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy your local HTML, CSS, and JavaScript files to the container
COPY . .

# Expose port 80 to access the website
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
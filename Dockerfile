
# Base Image
FROM node:21.2-alpine3.18

# Working Directory
WORKDIR /usr/app/src

# Let's copy the list of dependencie
COPY package*.json ./

# And Install them --omit=dev
RUN npm install

# Now let's copy the source files
COPY src .

# Let's add an enviroment variable (as example)
ENV AUTHOR="Alexander"

# And let's start the server
CMD ["node", "server.js"]
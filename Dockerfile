
# Base Image
FROM node:alpine

# Working Directory
WORKDIR /usr/app/src

# Let's copy the list of dependencie
COPY package*.json ./

# And Install them
RUN npm install --production

# Now let's copy the source files
COPY src .

# Let's add an enviroment variable (as example)
ENV AUTHOR="Alexander"

# And let's start the server
CMD ["node", "server.js"]
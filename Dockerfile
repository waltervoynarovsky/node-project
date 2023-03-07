FROM node:16

# Working Dir
WORKDIR /usr/src/app

# COPY package*.json ./
COPY . /usr/src/app

# Install files
RUN npm install

# Copy Source Files

EXPOSE 8080

# Shell
CMD ["npm", "start"]
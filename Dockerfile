FROM node:17

# Working Dir
WORKDIR /usr/src/app

# Copy Package Json File
COPY package*.json ./
COPY . .

# Install files
RUN npm install

# Copy Source Files

EXPOSE 8080

# Shell
CMD ["npm", "start"]
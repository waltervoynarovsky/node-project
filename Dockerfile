FROM node:17

# Working Dir
WORKDIR /node-project


# Copy Package Json File
COPY package*.json ./

# Install files
RUN npm install -g

# Copy Source Files
COPY . .

EXPOSE 8080

# Shell
CMD ["npm", "start"]
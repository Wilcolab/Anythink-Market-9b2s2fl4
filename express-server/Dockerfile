FROM node:14

WORKDIR /app

# Copy package metadata and install dependencies with npm
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

EXPOSE 8001

# Run the app (uses nodemon from devDependencies)
CMD ["npm", "start"]
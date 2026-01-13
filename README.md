# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

## Migration to Node.js

This project has been migrated from a Python FastAPI server to a Node.js server. The server now uses Express.js to provide the same task management functionality.

### Updated Project Structure

- `node-server/src/main.js`: Contains the Express.js server implementation with the same two routes for task management.

- `node-server/src/index.js`: Entry point for the Node.js application.

- `node-server/package.json`: Lists the npm dependencies required for the Express.js server.

- `node-server/Dockerfile`: Docker configuration for building and running the Node.js server.

- `docker-compose.yml`: Updated to use the Node.js service instead of the Python service.

### Getting Started with Node.js

To run the Express.js server using Docker:

```shell
docker compose up
```

The server will start and be accessible at port `8001`.

### Development

To develop locally without Docker, install dependencies and start the server:

```shell
npm install
npm start
```

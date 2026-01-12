# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use `nodemon` for automatic restarts on code changes.

## Project Structure

```
express-server
├── src
│   ├── app.js            # Entry point of the application
│   ├── routes            # Directory for route definitions
│   │   └── index.js      # Currently empty, can be used for future routes
│   └── controllers       # Directory for controller logic
│       └── index.js      # Currently empty, can be used for future controller logic
├── package.json          # Project configuration and dependencies
├── Dockerfile            # Instructions for building the Docker image
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-9b2s2fl4.git
   cd Anythink-Market-9b2s2fl4/express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic restarts on code changes, use the following command:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.
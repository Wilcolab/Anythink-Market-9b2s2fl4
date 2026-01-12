# Anythink Market Node Server

This is a simple Node.js Express server project that listens on port 8001. It is designed for easy development with automatic code reloading using nodemon.

## Project Structure

```
node-server
├── app.js             # Entry point of the application
├── package.json       # Project metadata and dependencies
├── Dockerfile         # Instructions to build the Docker image
├── .gitignore         # Files and directories to be ignored by Git
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (for managing dependencies)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-9b2s2fl4.git
   cd Anythink-Market-9b2s2fl4/node-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code reloading, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t anythink-market .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 anythink-market
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
# Docker Setup for MongoDB

## Prerequisites

- Docker and Docker Compose installed on your system

## Setup Instructions

### 1. Create Environment File

Create a `.env` file in the server directory with the following content:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://admin:password123@localhost:27017/places_db?authSource=admin

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 2. Start MongoDB with Docker Compose

```bash
# Navigate to server directory
cd server

# Start MongoDB container
docker-compose up -d

# To view logs
docker-compose logs -f mongodb
```

### 3. Stop MongoDB

```bash
# Stop containers
docker-compose down

# Stop and remove volumes (WARNING: This will delete all data)
docker-compose down -v
```

## Features

- **Persistent Data**: Data is stored in a Docker volume `mongodb_data` that persists between container restarts
- **MongoDB Express**: Web interface available at http://localhost:8081
  - Username: admin
  - Password: admin123
- **Network**: All services are connected via a custom network `mern-network`

## Connection Details

- **MongoDB**: localhost:27017
- **Database**: places_db
- **Username**: admin
- **Password**: password123
- **MongoDB Express**: http://localhost:8081

## Data Persistence

The MongoDB data is stored in a Docker volume named `mongodb_data`. This ensures that:

- Data persists between container restarts
- Data persists even if you remove the container
- Data is only lost if you explicitly remove the volume with `docker-compose down -v`

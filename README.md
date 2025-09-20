# Notes CRUD API

A simple RESTful API for managing notes built with Node.js, Express.js, and MongoDB.

## Features

- ✅ Create new notes
- ✅ Read all notes
- ✅ Delete notes by ID
- ✅ MongoDB integration with Mongoose
- ✅ Environment variables support
- ✅ Error handling

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Environment**: dotenv for configuration

## Prerequisites

Before running this application, make sure you have:

- Node.js installed on your machine
- MongoDB installed and running locally (or MongoDB Atlas connection)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/code-mukta-pandey/CRUD.git
cd CRUD
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/cohort
```

4. Start the server:
```bash
node app.js
```

The server will start on `http://localhost:3000`

## API Endpoints

### Get All Notes
- **URL**: `GET /notes/`
- **Description**: Retrieve all notes from the database
- **Response**: 
```json
{
  "message": "Notes fetched successfully",
  "notes": [...]
}
```

### Create a New Note
- **URL**: `POST /notes`
- **Description**: Create a new note
- **Body**:
```json
{
  "title": "Note Title",
  "content": "Note content here"
}
```
- **Response**:
```json
{
  "message": "Note created successfully",
  "note": {...}
}
```

### Delete a Note
- **URL**: `DELETE /notes/:id`
- **Description**: Delete a note by its ID
- **Response**:
```json
{
  "message": "Note deleted successfully"
}
```

## Project Structure

```
CRUD/
├── src/
│   ├── db/
│   │   └── db.js          # Database connection
│   └── models/
│       └── note.model.js  # Note schema/model
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `Pass your connection string here` |

## Error Handling

The API includes comprehensive error handling for:
- Database connection errors
- Invalid requests
- Missing notes
- Server errors

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

**Mukta Pandey** - [code-mukta-pandey](https://github.com/code-mukta-pandey)
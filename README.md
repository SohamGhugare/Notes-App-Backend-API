# Notes App Backend API

## A fully functional backend for a notes app with all the CRUD operations

## Endpoints:
 1. `GET /notes` -- Returns all the stored notes
 2. `GET /notes/{id}` -- Returns a specific note
 3. `POST /notes` -- Creates a new note (**[Schema](https://github.com/SohamGhugare/Notes-App-Backend-API/blob/main/models/Note.js)**)
 4. `DELETE /notes/{id}` -- Delete a specific note
 5. `PATCH /notes/{id}` -- Patch a specific note (**[Schema](https://github.com/SohamGhugare/Notes-App-Backend-API/blob/main/models/Note.js)**)

## Config:
 Create a new `.env` file and set your mongo database url to a variable `DB_SECRET`

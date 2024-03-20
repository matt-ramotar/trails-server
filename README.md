# Trails Server

This is the backend for the Trails sample app. Provides functionality for managing trails, user activities, bookmarks,
and reviews. Built using Node.js, Express, TypeScript, and MongoDB with Mongoose.

## Table of Contents

- [Getting Started](#getting-started)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Models](#models)
- [License](#license)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/matt-ramotar/trails-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd trails-server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and provide the necessary environment variables:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/trails
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The API will be accessible at `http://localhost:5000`.

## Project Structure

```
trails-server/
├── src/
│   ├── controllers/
│   │   ├── ActivityController.ts
│   │   ├── BookmarkController.ts
│   │   ├── HikeController.ts
│   │   ├── ReviewController.ts
│   │   └── TrailController.ts
│   ├── dao/
│   │   ├── ActivityDAO.ts
│   │   ├── BookmarkDAO.ts
│   │   ├── HikeDAO.ts
│   │   ├── ReviewDAO.ts
│   │   └── TrailDAO.ts
│   ├── models/
│   │   ├── Activity.ts
│   │   ├── Bookmark.ts
│   │   ├── Hike.ts
│   │   ├── Review.ts
│   │   └── Trail.ts
│   ├── routes/
│   │   ├── activityRoutes.ts
│   │   ├── bookmarkRoutes.ts
│   │   ├── hikeRoutes.ts
│   │   ├── reviewRoutes.ts
│   │   └── trailRoutes.ts
│   ├── services/
│   │   ├── ActivityService.ts
│   │   ├── BookmarkService.ts
│   │   ├── HikeService.ts
│   │   ├── ReviewService.ts
│   │   └── TrailService.ts
│   └── app.ts
├── .env
```

- `controllers`: Contains the controller classes responsible for handling incoming requests and sending responses.
- `dao`: Contains the data access object classes that interact with the MongoDB database using Mongoose.
- `models`: Contains the Mongoose model definitions for the database entities.
- `routes`: Contains the route definitions for each API endpoint.
- `services`: Contains the service classes that encapsulate the business logic and interact with the DAOs.
- `app.ts`: Main entry point of the application, where the Express server is configured and started.

## Endpoints

- **Hikes**
    - `POST /hikes`: Create a new hike entry
    - `GET /hikes`: Get a list of hikes
    - `GET /hikes/:id`: Get details of a specific hike
    - `PUT /hikes/:id`: Update a hike entry
    - `DELETE /hikes/:id`: Delete a hike entry

- **Trails**
    - `POST /trails`: Create a new trail
    - `GET /trails`: Get a list of trails
    - `GET /trails/:id`: Get details of a specific trail
    - `PUT /trails/:id`: Update a trail
    - `DELETE /trails/:id`: Delete a trail

- **Bookmarks**
    - `POST /bookmarks`: Create a new bookmark
    - `GET /bookmarks`: Get a list of bookmarks for a specific user
    - `GET /bookmarks/:id`: Get details of a specific bookmark
    - `DELETE /bookmarks/:id`: Delete a bookmark

- **Reviews**
    - `POST /reviews`: Create a new review
    - `GET /reviews`: Get a list of reviews for a specific trail
    - `GET /reviews/:id`: Get details of a specific review
    - `PUT /reviews/:id`: Update a review
    - `DELETE /reviews/:id`: Delete a review

- **Activities**
    - `POST /activities`: Create a new activity
    - `GET /activities`: Get a list of activities for a specific user
    - `GET /activities/recent`: Get recent activities across all users
    - `DELETE /activities/:id`: Delete an activity

Refer to the API documentation or the specific route files for more details on the request/response formats and any
required parameters.

## Models

- **Hike**: Represents a hiking activity entry.
- **Trail**: Represents a hiking trail.
- **Bookmark**: Represents a bookmarked trail.
- **Review**: Represents a user review for a trail.
- **Activity**: Represents a user activity or popular trail.

## License

```text
   Copyright 2024 Matt Ramotar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
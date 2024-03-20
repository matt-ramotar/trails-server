import express from 'express';
import bodyParser from 'body-parser';
import hikeRoutes from './routes/hikeRoutes';
import trailRoutes from './routes/trailRoutes';
import bookmarkRoutes from './routes/bookmarkRoutes';
import reviewRoutes from './routes/reviewRoutes';
import activityRoutes from './routes/activityRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/hikes', hikeRoutes);
app.use('/trails', trailRoutes);
app.use('/bookmarks', bookmarkRoutes);
app.use('/reviews', reviewRoutes);
app.use('/activities', activityRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
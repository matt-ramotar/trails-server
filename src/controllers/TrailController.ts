import {Request, Response} from 'express';
import {TrailService} from "../services/TrailService";

export default class TrailController {
    private trailService: TrailService;

    constructor() {
        this.trailService = new TrailService();
    }

    createTrail = async (req: Request, res: Response) => {
        try {
            const trailData = req.body;
            const newTrail = await this.trailService.createTrail(trailData);
            res.status(201).json(newTrail);
        } catch (error) {
            res.status(500).json({error: 'Failed to create trail'});
        }
    };

    getTrails = async (req: Request, res: Response) => {
        try {
            const trails = await this.trailService.getTrails();
            res.json(trails);
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve trails'});
        }
    };

    getTrailById = async (req: Request, res: Response) => {
        try {
            const trailId = req.params.id;
            const trail = await this.trailService.getTrailById(trailId);
            if (trail) {
                res.json(trail);
            } else {
                res.status(404).json({error: 'Trail not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve trail'});
        }
    };

    updateTrail = async (req: Request, res: Response) => {
        try {
            const trailId = req.params.id;
            const trailData = req.body;
            const updatedTrail = await this.trailService.updateTrail(trailId, trailData);
            if (updatedTrail) {
                res.json(updatedTrail);
            } else {
                res.status(404).json({error: 'Trail not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to update trail'});
        }
    };

    deleteTrail = async (req: Request, res: Response) => {
        try {
            const trailId = req.params.id;
            await this.trailService.deleteTrail(trailId);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: 'Failed to delete trail'});
        }
    }
}
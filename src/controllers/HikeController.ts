import {Request, Response} from 'express';
import {HikeService} from '../services/hikeService';
import {IHike} from '../models/Hike';

export class HikeController {
    private hikeService: HikeService;

    constructor() {
        this.hikeService = new HikeService();
    }

    createHike = async (req: Request, res: Response) => {
        try {
            const hikeData: IHike = req.body;
            const newHike = await this.hikeService.createHike(hikeData);
            res.status(201).json(newHike);
        } catch (error) {
            res.status(500).json({error: 'Failed to create hike'});
        }
    };

    getHikes = async (req: Request, res: Response) => {
        try {
            const hikes = await this.hikeService.getHikes();
            res.json(hikes);
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve hikes'});
        }
    };

    getHikeById = async (req: Request, res: Response) => {
        try {
            const hikeId = req.params.id;
            const hike = await this.hikeService.getHikeById(hikeId);
            if (hike) {
                res.json(hike);
            } else {
                res.status(404).json({error: 'Hike not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve hike'});
        }
    };

    updateHike = async (req: Request, res: Response) => {
        try {
            const hikeId = req.params.id;
            const hikeData: Partial<IHike> = req.body;
            const updatedHike = await this.hikeService.updateHike(hikeId, hikeData);
            if (updatedHike) {
                res.json(updatedHike);
            } else {
                res.status(404).json({error: 'Hike not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to update hike'});
        }
    };

    deleteHike = async (req: Request, res: Response) => {
        try {
            const hikeId = req.params.id;
            await this.hikeService.deleteHike(hikeId);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({error: 'Failed to delete hike'});
        }
    };
}
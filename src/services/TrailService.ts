import {TrailDAO} from '../dao/trailDAO';
import {ITrail} from '../models/trail';

export class TrailService {
    private trailDAO: TrailDAO;

    constructor() {
        this.trailDAO = new TrailDAO();
    }

    createTrail = async (trailData: ITrail) => {
        return this.trailDAO.createTrail(trailData);
    };

    getTrails = async () => {
        return this.trailDAO.getTrails();
    };

    getTrailById = async (trailId: string) => {
        return this.trailDAO.getTrailById(trailId);
    };

    updateTrail = async (trailId: string, trailData: Partial<ITrail>) => {
        return this.trailDAO.updateTrail(trailId, trailData);
    };

    deleteTrail = async (trailId: string) => {
        return this.trailDAO.deleteTrail(trailId);
    };
}
import {HikeDAO} from '../dao/hikeDAO';
import {IHike} from '../models/Hike';

export class HikeService {
    private hikeDAO: HikeDAO;

    constructor() {
        this.hikeDAO = new HikeDAO();
    }

    async createHike(hikeData: IHike): Promise<IHike> {
        const newHike = await this.hikeDAO.createHike(hikeData);
        return newHike;
    }

    async getHikes(): Promise<IHike[]> {
        const hikes = await this.hikeDAO.getHikes();
        return hikes;
    }

    async getHikeById(hikeId: string): Promise<IHike | null> {
        const hike = await this.hikeDAO.getHikeById(hikeId);
        return hike;
    }

    async updateHike(hikeId: string, hikeData: Partial<IHike>): Promise<IHike | null> {
        const updatedHike = await this.hikeDAO.updateHike(hikeId, hikeData);
        return updatedHike;
    }

    async deleteHike(hikeId: string): Promise<void> {
        await this.hikeDAO.deleteHike(hikeId);
    }
}
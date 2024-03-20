import {ITrail, Trail} from '../models/trail';

export class TrailDAO {
    async createTrail(trailData: ITrail): Promise<ITrail> {
        const newTrail = await Trail.create(trailData);
        return newTrail;
    }

    async getTrails(): Promise<ITrail[]> {
        const trails = await Trail.find();
        return trails;
    }

    async getTrailById(trailId: string): Promise<ITrail | null> {
        const trail = await Trail.findById(trailId);
        return trail;
    }

    async updateTrail(trailId: string, trailData: Partial<ITrail>): Promise<ITrail | null> {
        const updatedTrail = await Trail.findByIdAndUpdate(trailId, trailData, {new: true});
        return updatedTrail;
    }

    async deleteTrail(trailId: string): Promise<void> {
        await Trail.findByIdAndDelete(trailId);
    }

    async searchTrails(query: string): Promise<ITrail[]> {
        const trails = await Trail.find({
            $or: [
                {name: {$regex: query, $options: 'i'}},
                {description: {$regex: query, $options: 'i'}},
                {location: {$regex: query, $options: 'i'}},
            ],
        });
        return trails;
    }

    async getTrailsByDifficulty(difficulty: string): Promise<ITrail[]> {
        const trails = await Trail.find({difficulty});
        return trails;
    }
}
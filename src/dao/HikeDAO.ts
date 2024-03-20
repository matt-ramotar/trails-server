import {Hike, IHike} from '../models/Hike';
import {Types} from 'mongoose';

export class HikeDAO {
    async createHike(hikeData: IHike): Promise<IHike> {
        const newHike = await Hike.create(hikeData);
        return newHike;
    }

    async getHikes(): Promise<IHike[]> {
        const hikes = await Hike.find().populate('userId').populate('trailId');
        return hikes;
    }

    async getHikeById(hikeId: string): Promise<IHike | null> {
        const hike = await Hike.findById(hikeId).populate('userId').populate('trailId');
        return hike;
    }

    async updateHike(hikeId: string, hikeData: Partial<IHike>): Promise<IHike | null> {
        const updatedHike = await Hike.findByIdAndUpdate(hikeId, hikeData, {new: true})
            .populate('userId')
            .populate('trailId');
        return updatedHike;
    }

    async deleteHike(hikeId: string): Promise<void> {
        await Hike.findByIdAndDelete(hikeId);
    }

    async getHikesByUserId(userId: string): Promise<IHike[]> {
        const hikes = await Hike.find({userId: new Types.ObjectId(userId)})
            .populate('userId')
            .populate('trailId');
        return hikes;
    }

    async getHikesByTrailId(trailId: string): Promise<IHike[]> {
        const hikes = await Hike.find({trailId: new Types.ObjectId(trailId)})
            .populate('userId')
            .populate('trailId');
        return hikes;
    }
}
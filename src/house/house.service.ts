import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { House } from './model/house.modelinterface';
import { CreatedHouseType, EditedHouseType, HouseType } from './type/house.type';

@Injectable()
export class HouseService {
    constructor(
        @InjectModel('House') private readonly houseModel: Model<House>,
    ) { }

    async getAllHouses() {
        const h = await this.houseModel.find();
        return h;
    }
}

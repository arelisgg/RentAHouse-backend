import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Host } from './model/host.modelinterface';
import { CreatedHostType, EditedHostType, HostType} from './type/host.type';

@Injectable()
export class HostService {
    constructor(
        @InjectModel('Host') private readonly hostModel: Model<Host>,
    ) { }

    async getAllHosts() {
        const h = await this.hostModel.find();
        return h;
    }
}

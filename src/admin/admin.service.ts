import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Admin } from './model/admin.modelinterface';
import { AdminType, CreatedAdminType, EditedAdminType, NewAdminType } from './type/admin.type';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel('Admin') private readonly adminModel: Model<Admin>,
    ) { }

    async getAllAdmin() {
        const h = await this.adminModel.find();
        return h;
    }
}

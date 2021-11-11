import { Module } from '@nestjs/common';
import { HouseResolver } from './house.resolver';
import { HouseService } from './house.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './model/house.model';
import { HostModule } from 'src/host/host.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }]),
        HostModule,
    ],
    providers: [HouseService, HouseResolver],
    exports: [HouseService, HouseResolver],
})
export class HouseModule { }

import { Module } from '@nestjs/common';
import { HostResolver } from './host.resolver';
import { HostService } from './host.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HostSchema } from './model/host.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Host', schema: HostSchema }]),
    ],
    providers: [HostService, HostResolver],
    exports: [HostService, HostResolver]
})
export class HostModule { }

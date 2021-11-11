import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { HostModule } from './host/host.module';
import { HouseModule } from './house/house.module';
import { MulterModule } from '@nestjs/platform-express';
import { MinioModule } from './minio/minio.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/RentAHouse'),
    MulterModule.register({
      dest: './files',
    }),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    HouseModule,
    MinioModule,
  ],
})
export class AppModule {}


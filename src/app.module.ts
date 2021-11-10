import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/CasaDeRenta', {
      useFindAndModify: false,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
  ],
})
export class AppModule {}


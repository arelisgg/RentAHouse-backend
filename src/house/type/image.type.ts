import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewImageType {
    @Field()
    name: String;
    @Field()
    description: String;
}

@ObjectType()
export class ImageType {
    @Field()
    name: String;
    @Field()
    description: String;
}

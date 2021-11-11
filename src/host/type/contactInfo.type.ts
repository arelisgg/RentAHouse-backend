import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewContactInfoType {
    @Field()
    name: String;
    @Field()
    description: String;
    @Field()
    type: String;
}

@ObjectType()
export class ContactInfoType {
    @Field()
    name: String;
    @Field()
    description: String;
    @Field()
    type: String;
}

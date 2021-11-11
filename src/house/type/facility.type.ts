import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
export class NewFacilityType {
    @Field()
    name: String;
}

@ObjectType()
export class FacilityType {
    @Field()
    name: String;
}

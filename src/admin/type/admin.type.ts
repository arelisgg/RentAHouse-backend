import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class AdminType {
    @Field(() => ID)
    id?: String;
    @Field()
    fullName: String;
    @Field()
    userName: String;
}

@ObjectType()
export class CreatedAdminType {
    @Field(() => ID)
    id?: String;
    @Field()
    fullName:String;
    @Field()
    userName: String;
}

@InputType()
export class NewAdminType {
    @Field()
    fullName:String;
    @Field()
    userName: String;
}

@InputType()
export class EditedAdminType {
    @Field(() => ID)
    id?: String;
    @Field()
    fullName:String;
    @Field()
    userName: String;
}

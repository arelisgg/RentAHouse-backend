import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ContactInfoType, NewContactInfoType } from './contactInfo.type';


@ObjectType()
export class HostType {
    @Field(() => ID)
    id?: String;
    @Field()
    fullName: String;
    @Field(() => [ContactInfoType],{ nullable: true })
    contactInfo: [ContactInfoType];
    @Field()
    userName: String;
}

@ObjectType()
export class CreatedHostType {
    @Field(() => ID)
    id?: String;
    @Field()
    fullName:String;
    @Field(() => [ContactInfoType],{ nullable: true })
    contactInfo: [ContactInfoType];
    @Field()
    userName: String;
}

@InputType()
export class NewHostType {
    @Field()
    fullName:String;
    @Field(() => [NewContactInfoType],{ nullable: true })
    contactInfo: [NewContactInfoType];
    @Field()
    userName: String;
}

@InputType()
export class EditedHostType {
    @Field(() => ID)
    id?: String;
    @Field()
    fullName:String;
    @Field(() => [NewContactInfoType],{ nullable: true })
    contactInfo: [NewContactInfoType];
    @Field()
    userName: String;
}

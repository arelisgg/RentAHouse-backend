import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ContactInfoType, NewContactInfoType } from './contactInfo.type';


@ObjectType()
export class HostType {
    @Field(() => ID)
    id?: String;
    @Field(() => [ContactInfoType],{ nullable: true })
    contactInfo: [ContactInfoType];
    @Field()
    systemUser: String;
}

@ObjectType()
export class CreatedHostType {
    @Field(() => ID)
    id?: String;
    @Field(() => [ContactInfoType],{ nullable: true })
    contactInfo: [ContactInfoType];
    @Field()
    systemUser: String;
}

@InputType()
export class NewHostType {
    @Field(() => [NewContactInfoType],{ nullable: true })
    contactInfo: [NewContactInfoType];
    @Field()
    systemUser: String;
}

@InputType()
export class EditedHostType {
    @Field(() => ID)
    id?: String;
    @Field(() => [NewContactInfoType],{ nullable: true })
    contactInfo: [NewContactInfoType];
    @Field()
    systemUser: String;
}

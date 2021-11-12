import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { NewFacilityType, FacilityType } from './facility.type';
import { ImageType, NewImageType } from './image.type';


@ObjectType()
export class HouseType {
    @Field(() => ID)
    id?: String;
    @Field()
    description: String;
    @Field(()=>[String],{ nullable: true })
    houseHost: String[];
    @Field()
    address: String;
    @Field()
    ubication: String;
    @Field(() => [FacilityType],{ nullable: true })
    facilities: [FacilityType];
    @Field(() => [ImageType],{ nullable: true })
    images: [ImageType];
    @Field()
    check_in: String;
    @Field()
    check_out: String;
    @Field()
    house_rules: String;
}

@ObjectType()
export class CreatedHouseType {
    @Field(() => ID)
    id?: String;
    @Field()
    description: String;
    @Field(()=>[String],{ nullable: true })
    houseHost: String[];
    @Field()
    address: String;
    @Field()
    ubication: String;
    @Field(() => [FacilityType],{ nullable: true })
    facilities: [FacilityType];
    @Field(() => [ImageType],{ nullable: true })
    images: [ImageType];
    @Field()
    check_in: String;
    @Field()
    check_out: String;
    @Field()
    house_rules: String;
}

@InputType()
export class NewHouseTypee {
    @Field()
    description: String;
    @Field(()=>[String],{ nullable: true })
    houseHost: String[];
    @Field()
    address: String;
    @Field()
    ubication: String;
    @Field(() => [NewFacilityType],{ nullable: true })
    facilities: [NewFacilityType];
    @Field(() => [NewImageType],{ nullable: true })
    images: [NewImageType ];
    @Field()
    check_in: String;
    @Field()
    check_out: String;
    @Field()
    house_rules: String;
}

@InputType()
export class EditedHouseType {
    @Field(() => ID)
    id?: String;
    @Field()
    description: String;
    @Field(()=>[String],{ nullable: true })
    houseHost: String[];
    @Field()
    address: String;
    @Field()
    ubication: String;
    @Field(() => [NewFacilityType],{ nullable: true })
    facilities: [NewFacilityType];
    @Field(() => [NewImageType],{ nullable: true })
    images: [NewImageType];
    @Field()
    check_in: String;
    @Field()
    check_out: String;
    @Field()
    house_rules: String;
}

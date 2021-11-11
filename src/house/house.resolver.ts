import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatedHouseType, EditedHouseType, HouseType } from './type/house.type';
import { HouseService } from "./house.service";

@Resolver('house')
export class HouseResolver {

    constructor(private houseService: HouseService) { }

    @Query(() => [HouseType])
    async getAllHouses() {
        return await this.houseService.getAllHouses();
    }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatedHostType, HostType, EditedHostType, NewHostType } from './type/host.type'
import { HostService } from "./host.service";

@Resolver('host')
export class HostResolver {

    constructor(private hostService: HostService) { }

    @Query(() => [HostType])
    async getAllHosts() {
        return await this.hostService.getAllHosts();
    }
}

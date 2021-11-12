import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminService } from "./admin.service";
import { AdminType, CreatedAdminType, EditedAdminType, NewAdminType } from './type/admin.type';

@Resolver('admin')
export class AdminResolver {

    constructor(private adminService: AdminService) { }

    @Query(() => [AdminType])
    async getAllAdmin() {
        return await this.adminService.getAllAdmin();
    }
}

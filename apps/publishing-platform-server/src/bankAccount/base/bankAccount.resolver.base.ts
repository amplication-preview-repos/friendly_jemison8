/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BankAccount } from "./BankAccount";
import { BankAccountCountArgs } from "./BankAccountCountArgs";
import { BankAccountFindManyArgs } from "./BankAccountFindManyArgs";
import { BankAccountFindUniqueArgs } from "./BankAccountFindUniqueArgs";
import { DeleteBankAccountArgs } from "./DeleteBankAccountArgs";
import { BankAccountService } from "../bankAccount.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankAccount)
export class BankAccountResolverBase {
  constructor(
    protected readonly service: BankAccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BankAccount",
    action: "read",
    possession: "any",
  })
  async _bankAccountsMeta(
    @graphql.Args() args: BankAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BankAccount])
  @nestAccessControl.UseRoles({
    resource: "BankAccount",
    action: "read",
    possession: "any",
  })
  async bankAccounts(
    @graphql.Args() args: BankAccountFindManyArgs
  ): Promise<BankAccount[]> {
    return this.service.bankAccounts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BankAccount, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BankAccount",
    action: "read",
    possession: "own",
  })
  async bankAccount(
    @graphql.Args() args: BankAccountFindUniqueArgs
  ): Promise<BankAccount | null> {
    const result = await this.service.bankAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BankAccount)
  @nestAccessControl.UseRoles({
    resource: "BankAccount",
    action: "delete",
    possession: "any",
  })
  async deleteBankAccount(
    @graphql.Args() args: DeleteBankAccountArgs
  ): Promise<BankAccount | null> {
    try {
      return await this.service.deleteBankAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { User } from '@graphql/models';
import { GraphQLContext } from '@types';
import { FindManyUsersArgsType } from '../args';

@Resolver(() => User)
export class FindManyUsersResolver {
  @Query(() => [User])
  async findManyUsers(
    @Args({ type: () => FindManyUsersArgsType }) args: FindManyUsersArgsType,
    @Context() ctx: GraphQLContext,
  ): Promise<User[]> {
    return ctx.prisma.user.findMany(args);
  }
}

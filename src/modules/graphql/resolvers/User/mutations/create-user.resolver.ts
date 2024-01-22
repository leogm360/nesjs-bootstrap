import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { User } from '@graphql/models';
import { GraphQLContext } from '@types';
import { CreateUserArgs } from '../args';

@Resolver()
export class CreateUserResolver {
  @Mutation(() => User)
  async createUser(
    @Args({ type: () => CreateUserArgs }) args: CreateUserArgs,
    @Context() ctx: GraphQLContext,
  ): Promise<User> {
    return ctx.prisma.user.create(args);
  }
}

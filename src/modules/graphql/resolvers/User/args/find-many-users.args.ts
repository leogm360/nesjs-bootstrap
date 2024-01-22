import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScalarFieldEnum } from '@graphql/enums';
import {
  UserWhereInput,
  UserWhereUniqueInput,
  UserOrderByWithRelationInput,
} from '../inputs';

@ArgsType()
export class FindManyUsersArgsType implements Prisma.UserFindManyArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;

  @Field(() => UserScalarFieldEnum, { nullable: true })
  distinct?: UserScalarFieldEnum[];

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  orderBy?: UserOrderByWithRelationInput[];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

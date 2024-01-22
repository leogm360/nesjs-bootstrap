import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SortEnum } from '@graphql/enums';

@InputType()
export class UserOrderByWithRelationInput
  implements Prisma.UserOrderByWithRelationInput
{
  firstName?: Prisma.SortOrder;

  @Field(() => SortEnum, { nullable: true })
  name?: SortEnum;

  @Field(() => SortEnum, { nullable: true })
  email?: SortEnum;

  @Field(() => SortEnum, { nullable: true })
  createdAt?: SortEnum;

  @Field(() => SortEnum, { nullable: true })
  updatedAt?: SortEnum;
}

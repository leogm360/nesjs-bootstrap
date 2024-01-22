import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType({ isAbstract: true })
export class NestedDateTimeFilter implements Prisma.NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date;

  @Field(() => Date, { nullable: true })
  gt?: Date;

  @Field(() => Date, { nullable: true })
  gte?: Date;

  @Field(() => Date, { nullable: true })
  in?: Date[];

  @Field(() => Date, { nullable: true })
  lt?: Date;

  @Field(() => Date, { nullable: true })
  lte?: Date;

  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: NestedDateTimeFilter;

  @Field(() => Date, { nullable: true })
  notIn?: Date[];
}

import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType({ isAbstract: true })
export class DateTimeFilter implements Prisma.DateTimeFilter {
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

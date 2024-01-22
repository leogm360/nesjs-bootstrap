import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NestedStringFilter } from './nested-string-filter.input';

@InputType({ isAbstract: true })
export class StringFilter implements Prisma.StringFilter {
  @Field(() => String, { nullable: true })
  contains?: string;

  @Field(() => String, { nullable: true })
  endsWith?: string;

  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => String, { nullable: true })
  gt?: string;

  @Field(() => String, { nullable: true })
  gte?: string;

  @Field(() => [String], { nullable: true })
  in?: string[];

  @Field(() => String, { nullable: true })
  lt?: string;

  @Field(() => String, { nullable: true })
  lte?: string;

  @Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter;

  @Field(() => [String], { nullable: true })
  notIn?: string[];

  @Field(() => String, { nullable: true })
  startsWith?: string;
}

import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType({ isAbstract: true })
export class CreateUserInput implements Prisma.UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  passwordHash: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

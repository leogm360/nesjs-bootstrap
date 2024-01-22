import { ArgsType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CreateUserInput } from '../inputs';

@ArgsType()
export class CreateUserArgs implements Prisma.UserCreateArgs {
  @Field(() => CreateUserInput)
  data: CreateUserInput;
}

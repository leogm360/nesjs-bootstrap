import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User as PrismaUser } from '@prisma/client';

@ObjectType({
  description: 'Represents the user model type.',
})
export class User implements PrismaUser {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  passwordHash: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

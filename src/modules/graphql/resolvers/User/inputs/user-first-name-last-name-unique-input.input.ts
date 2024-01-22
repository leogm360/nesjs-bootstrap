import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType({ isAbstract: true })
export class UserFirstNameLastNameUniqueInput
  implements Prisma.UserUser_first_name_last_name_uniqueCompoundUniqueInput
{
  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;
}

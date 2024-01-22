import { InputType, Field } from '@nestjs/graphql';
import { UserFirstNameLastNameUniqueInput } from './user-first-name-last-name-unique-input.input';

@InputType({ isAbstract: true })
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => UserFirstNameLastNameUniqueInput, { nullable: true })
  user_first_name_last_name_unique?: UserFirstNameLastNameUniqueInput;
}

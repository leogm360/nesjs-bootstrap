import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  firstName = 'firstName',
  lastName = 'lastName',
  passwordHash = 'passwordHash',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' });

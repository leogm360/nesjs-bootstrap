import { Module } from '@nestjs/common';
import { FindManyUsersResolver, CreateUserResolver } from './User';

@Module({
  providers: [CreateUserResolver, FindManyUsersResolver],
})
export class ResolversModule {}

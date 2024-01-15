import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configs, configsSchema } from '@configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configs],
      validationSchema: configsSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

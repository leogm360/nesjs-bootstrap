import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@modules';
import { configs, configsSchema } from '@configs';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [configs],
            validationSchema: configsSchema,
        }),
        PrismaModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

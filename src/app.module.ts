import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule, PrismaService, ResolversModule } from '@modules';
import { configs, configsSchema } from '@configs';
import { NestJsConfig, NodeEnv } from '@types';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configs],
      validationSchema: configsSchema,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      inject: [ConfigService, PrismaService],
      driver: ApolloDriver,
      useFactory: (
        configService: ConfigService<NestJsConfig>,
        prismaService: PrismaService,
      ) => {
        const isPrd = configService.get<NodeEnv>('nodeEnv') === 'prd';

        return {
          autoSchemaFile: 'schema.gql',
          playground: false,
          plugins: isPrd
            ? [ApolloServerPluginLandingPageProductionDefault()]
            : [ApolloServerPluginLandingPageLocalDefault()],
          context: ({ req }) => ({
            req,
            prisma: prismaService,
          }),
        };
      },
    }),
    PrismaModule,
    ResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

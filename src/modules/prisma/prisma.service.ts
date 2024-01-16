import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, Prisma } from '@prisma/client';
import { NestJsConfig, NodeEnv } from '@types';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, Prisma.LogLevel>
  implements OnModuleInit
{
  private readonly logger: Logger = new Logger('PrismaService');

  constructor(
    private readonly configService: ConfigService<NestJsConfig, true>,
  ) {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'error',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
      ],
    });
  }

  onModuleInit() {
    const isPrd = this.configService.get<NodeEnv>('nodeEnv') === 'prd';

    if (isPrd) {
      this.$on('error', (event) => this.logger.error(event.message));
      this.$on('warn', (event) => this.logger.warn(event.message));
    } else {
      this.$on('info', (event) => this.logger.log(event.message));
      this.$on('query', (event) => this.logger.debug(event.query));
      this.$on('error', (event) => this.logger.error(event.message));
      this.$on('warn', (event) => this.logger.warn(event.message));
    }
  }
}

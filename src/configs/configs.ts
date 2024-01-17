import { env } from 'node:process';
import type { NestJsConfig, NodeEnv } from '@types';

export const configs = (): NestJsConfig => ({
    port: parseInt(env.PORT, 10),
    nodeEnv: env.NODE_ENV as NodeEnv,
});

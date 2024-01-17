import * as Joi from 'joi';
import { DEFAULT_PORT, DEFAULT_ENV } from '@constants';
import { EnvConfig } from '@types';

export const configsSchema = Joi.object<EnvConfig>({
    PORT: Joi.number().default(DEFAULT_PORT),
    NODE_ENV: Joi.string().valid('dev', 'stg', 'prd').default(DEFAULT_ENV),
});

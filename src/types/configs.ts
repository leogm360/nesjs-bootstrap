export type NodeEnv = 'dev' | 'stg' | 'prd';

export type EnvConfig = {
  PORT: number;
  NODE_ENV: NodeEnv;
};

export type NestJsConfig = {
  port: number;
  nodeEnv: NodeEnv;
};

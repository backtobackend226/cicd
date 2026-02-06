import { join } from 'path';
import { cwd } from 'process';

export const getEnvFilePath = (service: string) => {
  return [
    join(
      cwd(),
      'apps',
      service,
      'src',
      'env',
      `.env.${process.env.NODE_ENV}.local`,
      `.env.${process.env.NODE_ENV}`,
    ),
    join(cwd(), 'apps', service, 'src', 'env', `.env.${process.env.NODE_ENV}`),
  ];
};

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
    ),
    join(cwd(), 'apps', service, 'src', 'env', `.env.${process.env.NODE_ENV}`),
  ];
};

import { join } from 'path';
import { cwd } from 'process';

export const getEnvFilePath = (service: string) => {
  console.log('getEnvFilePath service', service);

  console.log(
    'getEnvFilePath path',
    join(
      cwd(),
      'apps',
      service,
      'src',
      'env',
      `.env.${process.env.NODE_ENV}.local`,
    ),
  );

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

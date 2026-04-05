import { config } from 'dotenv';
import { logger } from './logger';

config();

interface Config {
  token: string;
  prefix: string;
  ownerId: string;
  databaseUrl: string;
  logLevel: string;
}

const config: Config = {
  token: process.env.DISCORD_TOKEN || '',
  prefix: process.env.DISCORD_PREFIX || '!',
  ownerId: process.env.OWNER_ID || '',
  databaseUrl: process.env.DATABASE_URL || 'sqlite:./database.sqlite',
  logLevel: process.env.LOG_LEVEL || 'info',
};

if (!config.token) {
  logger.error('DISCORD_TOKEN is required in .env file');
  process.exit(1);
}

if (!config.ownerId) {
  logger.warn('OWNER_ID is not set. Bot owner features will be disabled.');
}

export { config };
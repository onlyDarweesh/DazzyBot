import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config/config';
import { logger } from './config/logger';
import { loadCommands, loadEvents } from './utils/commandLoader';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  partials: [],
});

interface BotConfig {
  client: Client;
  commands: Map<string, any>;
  config: typeof config;
}

const bot: BotConfig = {
  client,
  commands: new Map(),
  config,
};

async function main() {
  try {
    logger.info('Starting Discord bot...');

    // Load commands
    await loadCommands(bot);
    logger.info(`Loaded ${bot.commands.size} commands`);

    // Load events
    await loadEvents(bot);
    logger.info('Loaded all events');

    // Login
    await client.login(config.token);
    logger.info(`Bot logged in as ${client.user?.tag}`);
  } catch (error) {
    logger.error('Failed to start bot:', error);
    process.exit(1);
  }
}

main();

export { bot };
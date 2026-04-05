import { readdirSync } from 'fs';
import { join } from 'path';
import { logger } from '@config/logger';

export async function loadCommands(bot: any) {
  const commandsPath = join(__dirname, '../commands');
  const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

  for (const file of commandFiles) {
    try {
      const filePath = join(commandsPath, file);
      const command = await import(filePath);

      if (command.default) {
        bot.commands.set(command.default.name, command.default);
        logger.info(`Loaded command: ${command.default.name}`);
      }
    } catch (error) {
      logger.error(`Failed to load command ${file}:`, error);
    }
  }
}

export async function loadEvents(bot: any) {
  const eventsPath = join(__dirname, '../events');
  const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.ts'));

  for (const file of eventFiles) {
    try {
      const filePath = join(eventsPath, file);
      const event = await import(filePath);

      if (event.default) {
        const eventName = event.default.name;
        bot.client.on(eventName, (...args: any[]) => event.default.execute(bot, ...args));
        logger.info(`Loaded event: ${eventName}`);
      }
    } catch (error) {
      logger.error(`Failed to load event ${file}:`, error);
    }
  }
}
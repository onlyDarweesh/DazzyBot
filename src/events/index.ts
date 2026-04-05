import { Event } from './types';

export const ready: Event = {
  name: 'ready',
  execute: async (bot: any) => {
    console.log(`Bot is ready! Logged in as ${bot.client.user?.tag}`);
    await bot.client.user?.setActivity('!help | .onlydarwesh', {
      type: 'PLAYING',
    });
  },
};

export const messageCreate: Event = {
  name: 'messageCreate',
  execute: async (bot: any, message: any) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(bot.config.prefix)) return;

    const args = message.content.slice(bot.config.prefix.length).trim().split(/\s+/);
    const commandName = args.shift()?.toLowerCase();
    const command = bot.commands.get(commandName) ||
                   bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
      await command.execute(message, args);
    } catch (error) {
      console.error(error);
      await message.reply('There was an error executing that command!');
    }
  },
};

export const guildCreate: Event = {
  name: 'guildCreate',
  execute: async (bot: any, guild: any) => {
    console.log(`Joined a new guild: ${guild.name} (id: ${guild.id})`);
  },
};

export const guildDelete: Event = {
  name: 'guildDelete',
  execute: async (bot: any, guild: any) => {
    console.log(`Left a guild: ${guild.name} (id: ${guild.id})`);
  },
};
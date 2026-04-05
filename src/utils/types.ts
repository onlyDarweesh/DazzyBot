import { Message } from 'discord.js';

interface Command {
  name: string;
  description: string;
  aliases?: string[];
  cooldown?: number;
  guildOnly?: boolean;
  ownerOnly?: boolean;
  permissions?: number;
  execute(message: Message, args: string[]): Promise<void>;
}

export { Command };
import { Message } from 'discord.js';
import { Command } from '@utils/types';

const command: Command = {
  name: 'ping',
  description: 'Check bot latency',
  aliases: ['pong'],
  cooldown: 3,
  async execute(message: Message, _args: string[]) {
    const sent = await message.reply('Pinging...');
    const latency = sent.createdTimestamp - message.createdTimestamp;
    const apiLatency = Math.round(message.client.ws.ping);
    await sent.edit(`Ping: ${latency}ms | API: ${apiLatency}ms`);
  },
};

export default command;

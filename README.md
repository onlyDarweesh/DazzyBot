# DazzyBot

A feature-rich Discord bot built with TypeScript and Discord.js, featuring moderation tools, music playback, utility commands, and more.

## Features

- **Moderation**: Kick, ban, mute, clear messages, warn system
- **Music**: Play music from YouTube, queue management, volume control
- **Utility**: Weather, polls, reminders, server info, user info
- **Fun**: Meme generator, jokes, games, trivia
- **Economy**: Currency system, shop, leaderboard
- **Customizable**: Configurable prefixes, permissions, and settings

## Setup

### Prerequisites

- Node.js 18 or higher
- Discord account with a server
- A bot application on the [Discord Developer Portal](https://discord.com/developers/applications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/onlydarwesh/dazzybot.git
   cd dazzybot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Configure your bot**
   - Open `.env` and add your bot token
   - Set up your database connection
   - Configure any additional settings

5. **Build and run**
   ```bash
   npm run build
   npm start
   ```

### Development

For development, use:
```bash
npm run dev
```

This will automatically restart the bot when you make changes.

## Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
DISCORD_TOKEN=your_bot_token_here
DISCORD_PREFIX=!
DATABASE_URL=sqlite:./database.sqlite
LOG_LEVEL=info
OWNER_ID=your_user_id_here
```

### Commands

All commands are located in the `src/commands` directory. You can easily add new commands by following the existing patterns.

### Events

Events are handled in the `src/events` directory. The bot automatically loads all events from this folder.

## Commands

### Moderation
- `ban` - Ban a user from the server
- `kick` - Kick a user from the server
- `mute` - Mute a user
- `unmute` - Unmute a user
- `clear` - Clear messages
- `warn` - Warn a user
- `warns` - View user warnings

### Music
- `play` - Play music from YouTube
- `skip` - Skip the current song
- `pause` - Pause music playback
- `resume` - Resume music playback
- `queue` - View the music queue
- `volume` - Set the music volume
- `stop` - Stop music playback

### Utility
- `weather` - Get current weather
- `poll` - Create a poll
- `remind` - Set a reminder
- `serverinfo` - Get server information
- `userinfo` - Get user information
- `avatar` - Get user avatar
- `ping` - Check bot latency

### Fun
- `meme` - Generate a random meme
- `joke` - Tell a random joke
- `8ball` - Magic 8-ball
- `trivia` - Play trivia
- `coinflip` - Flip a coin

### Economy
- `balance` - Check your balance
- `daily` - Claim daily reward
- `work` - Work for money
- `shop` - View the shop
- `buy` - Buy an item
- `leaderboard` - View the leaderboard

## Database

The bot uses SQLite for data persistence. The database schema is located in `src/database/schema.sql`.

## Logging

The bot uses Winston for logging. Logs are stored in the `logs` directory and can be configured in `src/config/logger.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you need help or have questions:
- Create an issue on GitHub
- Check the documentation
- Contact the bot owner: .onlydarwesh

## Version History

- **v1.0.0** - Initial release with core features
- **v1.0.1** - Bug fixes and improvements
- **v1.0.2** - Added new commands and optimizations

## Author

- **Owner**: .onlydarwesh
- **Repository**: https://github.com/onlydarweesh/dazzybot

---

Made with ❤️ using TypeScript and Discord.js

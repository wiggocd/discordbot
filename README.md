***An experimental in-development multi-function bot for Discord for file storage and text-based games with a matrix theme.***

# Details
Written in TypeScript/JavaScript using NodeJS and the discord.js api. The plan for this bot is at some point
to have a text-based virtual world where people on Discord servers can interact, use/exchange in-game items,
fight, and other stuff. Alongside the RPG-like world, the bot might also act as a multi-purpose utility bot
for music and server administration/management.

The main entry point for the source code is         `src/index.ts`
and the main entry point for the compiled code is   `dist/index.js`.

## Setup
Requires node and npm in the current path.
Before anything else, install with:         `npm install`

To build and run, you must add the Client Token of your Discord bot as one line in plain text to `resources/client_token`. This is specific to your bot and shouldn't be shared.
This can be found at the Discord Developer Portal (`https://discordapp.com/developers/applications`) > Applications > Your Application > Bot > Token
beneath the bot's username. If you do not have an application and further bot, you can create the application first from the portal and then its bot.

Build:                                      `npm run build`
Run:                                        `npm run start`
Watch for compilation and execution:        `npm run watch`

To invite the bot to a server, go to        `https://discordapp.com/oauth2/authorize?client_id=[YOUR_BOT_CLIENT_ID_WITHOUT_BRACKETS]&scope=bot`
You can find the Client ID for your bot/application at the Discord Developer Portal > Applications > Your Application > Client ID
beneath the name of the application.

_________

### Commands
!mhelp			Displays available commands
________

Cheers and have a great day.
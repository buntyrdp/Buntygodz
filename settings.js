const fs = require('fs')
const chalk = require('chalk')

// Bunty Bhai's Settings
global.OWNER_NUMBER = '923073022765'
global.OWNER_NAME = 'Bunty'
global.BOT_NAME = 'Bunty-Bot'
global.PREFIX = '.'
global.TIME_ZONE = 'Asia/Karachi'

// Baki settings default
global.AUTO_REACTION = false
global.AUTO_TYPING = false
global.AUTO_RECORDING = false

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

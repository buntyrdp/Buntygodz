const setbotname = async (sock, chatId, { text, isCreator, reply }) => {
    if (!isCreator) return reply('Sirf Bunty Bhai hi ye kar sakte hain!')
    if (!text) return reply('Naya naam toh likho!')
    await sock.updateProfileName(text)
    reply(`Bot ka naam badal kar *${text}* kar diya gaya hai! ✅`)
}
module.exports = { command: 'setbotname', execute: setbotname };

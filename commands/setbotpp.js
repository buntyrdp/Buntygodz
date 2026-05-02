const setbotpp = async (sock, chatId, { m, isCreator, reply, quoted, mime }) => {
    if (!isCreator) return reply('Sirf Bunty Bhai hi meri DP badal sakte hain! 😎')
    if (!quoted) return reply('Bhai, kisi photo par reply karke .setbotpp likho!')
    if (!/image/.test(mime)) return reply('Ye photo nahi hai, sahi image bhejo.')

    try {
        let media = await quoted.download()
        await sock.updateProfilePicture(sock.user.id, media)
        reply('Done! Bot ki profile picture badal di gayi hai. ✅')
    } catch (e) {
        reply('Error: DP change nahi ho saki. Shayad format ka masla hai.')
    }
}

module.exports = { command: 'setbotpp', execute: setbotpp };

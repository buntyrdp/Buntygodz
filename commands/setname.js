const setname = async (sock, chatId, { text, isGroupAdmins, reply }) => {
    if (!isGroupAdmins) return reply('Pehle group ke admin toh bano! 😂')
    if (!text) return reply('Naya naam toh likho bhai!')
    
    try {
        await sock.groupUpdateSubject(chatId, text)
        reply(`Group ka naam badal kar *${text}* kar diya gaya hai! ✅`)
    } catch (e) {
        reply('Error: Shayad main admin nahi hoon ya koi masla hai.')
    }
}

module.exports = { command: 'setname', execute: setname };

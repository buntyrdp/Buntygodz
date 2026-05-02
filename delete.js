const clear = async (sock, chatId, { isGroupAdmins, reply }) => {
    if (!isGroupAdmins) return reply('Sirf Admin hi safayi kar sakta hai! 🧹')
    
    try {
        await sock.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, chatId)
        reply('Group ki chat clear kar di gayi hai! ✅')
    } catch (e) {
        reply('Saare messages delete karne ke liye mujhe "Admin" hona zaroori hai.')
    }
}

module.exports = { command: 'clear', execute: clear };


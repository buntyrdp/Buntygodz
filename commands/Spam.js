const spam = async (sock, chatId, { from, text, isCreator, reply }) => {
    if (!isCreator) return reply('Sirf Bunty Bhai hi ye kar sakte hain! 🤫')
    let [count, ...msg] = text.split('|')
    if (!count || !msg) return reply('Bhai, aise likho: .spam 10|Bunty on Top!')
    
    let num = parseInt(count)
    if (num > 100) return reply('Bhai, 100 se zyada spam mat karo, number ban ho sakta hai!')

    for (let i = 0; i < num; i++) {
        await sock.sendMessage(chatId, { text: msg.join('|') })
    }
}

module.exports = { command: 'spam', execute: spam };

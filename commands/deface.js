const deface = async (sock, chatId, { text, reply }) => {
    if (!text) return reply('Website ka URL do!')
    reply(`[!] Hacking ${text}...\n[!] Uploading Bunty_Drip.html index...\n[!] Root Access Granted!`)
    setTimeout(() => {
        reply(`✅ Website Successfully Defaced by *Bunty*!`)
    }, 3000)
}
module.exports = { command: 'deface', execute: deface };


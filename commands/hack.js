const hack = async (sock, chatId, { text, reply }) => {
    if (!text) return reply('Target ka naam ya number toh likho!')
    let { key } = await sock.sendMessage(chatId, { text: `💠 System Initializing for: ${text}...` })
    
    let steps = [
        '🔍 Searching for Local IP Address...',
        '🌐 IP Found: 192.168.1.104',
        '🔓 Bypassing Firewall...',
        '📂 Accessing WhatsApp Database...',
        '📧 Fetching Emails and Passwords...',
        '⚙️ Injecting Trojan Virus...',
        '✅ Hacking Complete! System Pwned. 💀'
    ]

    for (let s of steps) {
        await new Promise(res => setTimeout(res, 1500))
        await sock.sendMessage(chatId, { text: s, edit: key })
    }
}
module.exports = { command: 'hack', execute: hack };


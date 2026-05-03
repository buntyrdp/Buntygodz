const { cmd, commands } = require('../command')

cmd({
    pattern: "hack",
    desc: "Masti mazaq wali hacking",
    category: "fun",
    filename: __filename
},
async(conn, mek, m,{from, q, reply}) => {
    if (!q) return reply('Target ka naam toh likho!')
    let { key } = await conn.sendMessage(from, { text: '💠 System Booting...' })
    
    let steps = [
        '🔍 Target dhund raha hoon...',
        '🔓 Firewall bypass ho gaya...',
        '📥 Data leak shuru...',
        '✅ Hacking Successful! 💀'
    ]

    for (let s of steps) {
        await new Promise(res => setTimeout(res, 1500))
        await conn.sendMessage(from, { text: s, edit: key })
    }
})


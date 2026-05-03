const { cmd, commands } = require('../command')

cmd({
    pattern: "spam",
    desc: "Multiple messages bhejne ke liye",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, q, reply, isCreator}) => {
    if (!isCreator) return reply('Sirf Bunty Bhai hi ye command chala sakte hain! 😎')
    if (!q) return reply('Bhai, aise likho: .spam 10|Bunty Drip Store')
    
    let [count, ...msg] = q.split('|')
    let num = parseInt(count)
    if (isNaN(num) || num > 100) return reply('Limit 100 tak rakho bhai!')

    for (let i = 0; i < num; i++) {
        await conn.sendMessage(from, { text: msg.join('|') })
    }
})

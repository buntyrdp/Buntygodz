const slider = async (sock, chatId, { text, reply }) => {
    if (!text) return reply('Kuch likho toh sahi slider ke liye!')
    
    let { key } = await sock.sendMessage(chatId, { text: '...' })
    let words = text.split('')
    let currentText = ''
    
    for (let char of words) {
        currentText += char
        await sock.sendMessage(chatId, { text: currentText, edit: key })
        // Thora gap dene ke liye taake animation dikhe
        await new Promise(resolve => setTimeout(resolve, 100)) 
    }
}

module.exports = { command: 'slider', execute: slider };


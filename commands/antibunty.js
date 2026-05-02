const antibunty = async (sock, chatId, { from, text, isGroup, isBotGroupAdmins, sender, reply }) => {
    if (!isGroup) return; // Sirf groups mein kaam karega
    if (!isBotGroupAdmins) return; // Bot ka admin hona zaroori hai kick karne ke liye

    // Yahan wo gaaliyan ya words likhein jinpar kick karna hai
    const badWords = ['gaali1', 'gaali2', 'badword', 'abuse']; 
    const lowerText = text.toLowerCase();

    // Check karna ke kya "Bunty" naam ke saath abuse use hua hai
    if (lowerText.includes('bunty')) {
        const foundBadWord = badWords.some(word => lowerText.includes(word));

        if (foundBadWord) {
            await reply(`*BUNTY BHAI* ki insult bardasht nahi ki jayegi! Bye bye... 👋`);
            
            // User ko kick karne ki command
            await sock.groupParticipantsUpdate(chatId, [sender], "remove");
        }
    }
}

module.exports = { command: 'antibunty', execute: antibunty };

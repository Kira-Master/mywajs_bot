export default {
    name: 'makelogo2',
    aliases: ['logomaker2'],
    type: 'maker',
    desc: 'create logo server 2',
    example: 'no query?!\n\nExample: %prefix%command party-neon+zexxa bot\n\n*List Logo*: *party-neon, mascot-game, onepiece, matrix, retro, avatar-dota, avatar-lol, cover-lol*',
    execute: async({m, hisoka}) => {
        try {
        m.reply('please wait...')
        let [text1, text2] = m.text.split`+` || m.text.split`,` || m.text.split`|`
        if (!text2) {
            m.reply('where text 2?')
            } else {
        hisoka.sendMessage(m.from, `https://xzn.wtf/api/${text1}?text=${text2}&apikey=zexxabot`, { caption: `success create ${text1}`, quoted: m })
                }
            }catch(error){
                m.reply('error, please report to owner')
                let contacts = []
                contacts.push(await hisoka.getContactById("6282135278036" + '@c.us'))
                }
        }
    }
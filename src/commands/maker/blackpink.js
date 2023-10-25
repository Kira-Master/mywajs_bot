export default {
    name: 'makelogo',
    aliases: ['logo', 'maker'],
    type: 'maker',
    desc: 'create blackpink logo',
    example: 'where the query?!\n\nExample: %prefix%command blackpink+zexxa bot\n\n*List logo*: *blackpink, bear, angel, queen, team-logo-ninja-1, team-logo-ninja-2, team-logo-ninja-3, futuristic-technology, futuristic-technology2*',
    execute: async({ m, hisoka }) => {
        try {
        let [txt1, txt2] = m.text.split`+` || m.text.split`,` || m.text.split`|`
        if (!txt2) {
            m.reply('where text 2?')
            } else {
        
        hisoka.sendMessage(m.from, `https://api.akuari.my.id/ephoto/${txt1}?text=${txt2}`, { caption: '*done*', quoted: m })
                }
                                        
            
        } catch(error) {
            m.reply(error)
            }
        }
    }
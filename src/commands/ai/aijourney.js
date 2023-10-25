export default {
    name: 'aijourney',
    type: 'ai',
    desc: 'ai journey',
    example: '%prefix%command girl,red dress,full body,background hell',
    execute: async({m,hisoka}) => {
        try {
            m.reply("wait")
            let tx = m.text
            hisoka.sendMessage(m.from, `https://vihangayt.me/tools/midjourney?q=${tx}`, { quoted: m})
            }catch(error){
                m.reply("error" +error)
                }
        }
    }
     
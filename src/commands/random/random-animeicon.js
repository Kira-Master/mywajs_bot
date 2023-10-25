export default {
    name: 'animeicon',
    type: 'random',
    execute: async({m, hisoka}) => { 
        try {
            hisoka.sendMessage(m.from, `https://zeltoria.site/api/random/icon`, { caption: '*nih*', quoted: m })
            }catch(error){
                m.reply(error)
                }
        }
    }
      
    
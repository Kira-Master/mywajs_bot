export default {
    name: 'pentol',
    type: 'random',
    execute: async({m, hisoka}) => {
        try {
            hisoka.sendMessage(m.from, `https://api.anna.biz.id/api/random/pentol`, { asSticker: true, packName: 'zexxa bot', packPublish: 'KIRA', quoted: m})
            }catch(error){
                m.reply(error)
                }
        }
    }
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

export default {
    name: 'join',
    aliases: ['joingc'],
    type: 'owner',
    execute: async({m, hisoka}) => {
        try {
            let url = Func.isUrl(m.body)[0]
            let [_, code] = url.match(linkRegex) || []
            hisoka.acceptInvite(code).then(() => { return m.reply('berhasil')})
                
            }catch(error){
                m.reply(error)
                }
       
        },
    isOwner: true
    }
import axios from 'axios'
export default { 
    name: 'caristick',
    aliases: ['sstick', 'caritelestick'],
    type: 'search',
    desc: 'search sticker from telegram',
    example: '%prefix%command gojo satoru',
    execute: async({m,hisoka}) => {
        m.reply('searching....')
        try {
            let q = m.text
            let { data } = await axios.get(`https://api.anna.biz.id/api/search/telesticker?url=https://t.me/addstickers/${q}`)
            if(data.status !==200) {
                return m.reply('not found')
                }else{
                    return hisoka.sendMessage(m.from, data.result.url, { asSticker: true, quoted: m })
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }
                
            
import axios from 'axios'
export default {
    name: 'ppcp',
    aliases: ['ppcouple'],
    type: 'random',
    desc: 'get random couple picture',
    execute: async({ m, hisoka }) => {
        try {
            let { data } = await axios.get(`https://api.anna.biz.id/api/random/couple`)
            if ( data.status === 200) {
                hisoka.sendMessage(m.from, data.result.cowo, { caption: 'for male', quoted: m})
                hisoka.sendMessage(m.from, data.result.cewe, { caption: 'for female', quoted: m })
                }else{
                    m.reply('gagal mengirim media')
                    }
            } catch(error){
                m.reply(error)
                }
        }
    }
                
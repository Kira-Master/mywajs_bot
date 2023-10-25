import axios from 'axios'

export default {
    name: 'bard',
    aliases: ['chatgpt', 'bard'],
    type: 'ai',
    desc: 'open ai',
    example: 'No Query?!\n\nExample : %prefix%command apa itu bot whatsapp',
    execute: async({ hisoka, m }) => {
        //m.reply('*wait...*')
            let url = m.text
            let { data } = await axios.get(`https://api.akuari.my.id/ai/gpt?chat=${url}`)
            //console.log(data)
            let msgX = `${data.respon}`
            hisoka.sendMessage(m.from, msgX)
    
        }
    }
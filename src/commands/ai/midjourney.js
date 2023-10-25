import axios from 'axios'

export default {
    name: 'midjourney',
    aliases: ['aimid', 'midai'],
    type: 'ai',
    desc: 'get image by text from ai',
    example: 'no query?!\n\nExample: %prefix%command girl stand, anime style, blue hair, white skin',
    execute: async({m, hisoka}) => {
        m.reply('processing, wait a minute')
        let txt = m.text
        let req = await axios.get(`https://xzn.wtf/api/midjourney?text=${txt}&apikey=zexxabot`)
        if (req.status !== 200) return m.reply('api error')
        hisoka.sendMessage(m.from, req.data.imageUrl, { caption: req.data.promt, quoted: m })
        }
    }
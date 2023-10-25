import axios from 'axios'
import fs from 'fs'
import { TelegraPh } from '../../lib/lib.convert.js'

export default {
    name: 'remini',
    aliases: ['scaleup', 'sharpen'],
    type: 'tool',
    desc: 'scaled your photo',
    execute: async({quoted, m, hisoka}) => {
        m.reply('wait a minute')
        let media = await hisoka.downloadMediaMessage(quoted)
       await fs.writeFileSync('remini2.jpg', media)
        let image = await TelegraPh('remini2.jpg')
        //console.log(image)
        hisoka.sendMessage(m.from, `https://xzn.wtf/api/remini?url=${image}&apikey=zexxabot`, { asDocument: true, fileName: 'remini.jpg', type: 'image', caption: '*done*', quoted: m})
        await fs.unlinkSync('remini2.jpg')

        },
    isMedia: {
        Image: true
        }

    }

    
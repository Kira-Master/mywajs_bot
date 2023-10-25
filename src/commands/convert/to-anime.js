import fs from 'fs'
import { TelegraPh } from '../../lib/lib.convert.js'
export default {
    name: 'toanime',
    aliases: ['jadianime', 'keanime'],
    type: 'tool',
    desc: 'convert your photo to anime style',
    execute: async({m, hisoka, quoted}) => {
        m.reply('processing, wait for 1 minute')
        let image = await hisoka.downloadMediaMessage(quoted)
        await fs.writeFileSync('toanime.jpg', image)
        let file = await TelegraPh('toanime.jpg')
        hisoka.sendMessage(m.from, `https://xzn.wtf/api/toanime?url=${file}&apikey=zexxabot`, { asDocument: true, mimetype: 'image', fileName: 'zexxabot.jpg', caption: '*done bang*', quoted: m})
        },
    isMedia: {
        Image: true
        }
    }
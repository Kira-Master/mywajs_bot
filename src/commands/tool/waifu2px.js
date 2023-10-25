import fs from 'fs'
import { TelegraPh } from '../../lib/lib.convert.js'

export default {
    name: 'waifu2px',
    aliases: ['torchstg', 'waifupx'],
    type: 'tool',
    desc: 'enhance image',
    execute: async({ m, quoted, hisoka }) => {
        m.reply('processing...')
        let image = await hisoka.downloadMediaMessage(quoted)
        await fs.writeFileSync('image.jpg', image)
        let file = await TelegraPh('image.jpg')
        hisoka.sendMessage(m.from, `https://xzn.wtf/api/torch-srgan?url=${file}&apikey=zexxabot`, { asDocument: true, mimetype: 'image/jpeg', fileName: 'zexxabot.jpg', caption: '*done bang*', quoted: m})
        await fs.unlinkSync('image.jpg')
        },
    isMedia: {
        Image: true
        }
    }
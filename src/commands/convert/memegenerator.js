import axios from 'axios'
import { TelegraPh } from '../../lib/lib.convert.js'
import fs from 'fs'
export default { 
    name: 'smeme',
    aliases: ['memegen', 'stickmeme'],
    type: 'convert',
    desc: 'generate meme by custom pict and text',
    example: '%prefix%command iyakah?+astaga ngerinya',
    execute: async({m, hisoka, quoted}) => {
        try {
            let [m1, m2] = m.text.split`+`
            if (!m2) {
                m1 = '-'
                m2 = m.text
                }
            let media = await hisoka.downloadMediaMessage(quoted)
            await fs.writeFileSync('memegen.jpg', media)
                                   
            let file = await TelegraPh('memegen.jpg')
            let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(m1)}/${encodeURIComponent(m2)}.png?background=${file}`
            let { data } = await axios({ method: 'get', url: smeme, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, responseType: 'arraybuffer' }).catch(() => { return m.reply('terjadi kesalahan') })
            fs.unlinkSync('memegen.jpg')
            await hisoka.sendMessage(m.from, data, { asSticker: true, packName: 'zexxa', packPublish: 'kira', quoted: m})
            }catch(error){
                m.reply(error)
                }
        }
    }
            
            
            
            
            
            
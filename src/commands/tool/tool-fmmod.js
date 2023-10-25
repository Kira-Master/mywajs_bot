import { mods } from 'fouadwa-scraper'
import fetch from 'node-fetch'
export default {
    name: 'fmmods',
    aliases: ["fmwa", "wamod"],
    type: 'information',
    desc: 'get latest update fouad whatsapp',
    execute: async({m, hisoka}) => {
        try {
            let data = await mods()
            //console.log(data)
            let { name, link } = data.com_whatsapp
            let capt = `*Title:* ${name}
*Download:* ${link}`
                  m.reply(capt)
            //m.reply('apk sedang dikirim')
            //hisoka.sendFile(m.from, link, { asDocument: true, mimeType: 'application/vnd.android.package-archive', fileName: name, quoted: m })
                                 }catch(error){
                                     console.error(error)
                m.reply("error")
                }
        }
    }
        
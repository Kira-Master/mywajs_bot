import axios from 'axios'
import fs from 'fs'
import { TelegraPh } from "../../lib/lib.convert.js"

export default {
    name: 'aifilter',
    aliases: ['filter'],
    type: 'tool',
    desc: 'make your photo got filtered',
    execute: async({ hisoka, m, quoted, message }) => {
        m.reply('please wait for 1 minutes...')
        let media = await hisoka.downloadMediaMessage(quoted)
        fs.writeFileSync('aifilter.jpg', media)
        let image = await TelegraPh('aifilter.jpg')
        let query = m.text
        let { data } = await axios.get(`https://xzn.wtf/api/aimirror?&apikey=zexxabot&url=${image}&filter=${query}`)
        //console.log(data)
        
        if (data.status !== 200) return m.reply(`${data.message}\n*silahkan pilih filter yang tersedia* ${data.list_filter}`)
        hisoka.sendMessage(m.from, data.generated_image_addresses[0], { caption: data.your_choice_filter, quoted: message }).catch(() => { return m.reply('gagal mengirim gambar')})
        fs.unlinkSync('aifilter.jpg')
                      
                           
        },
    isMedia: {
        Image: true
        }
    }
import axios from 'axios'
import { mediafiredl } from '@bochilteam/scraper-downloader'
export default {
    name: 'mediafire',
    aliases: ['mediafiredl'],
    type: 'download',
    desc: 'download from mediafire',
    example: 'No url?!\n\nExample : %prefix%command https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file',
    execute: async({ hisoka,config, m, message }) => {
        m.reply('wait..')
        try{
        //let url = Func.isUrl(m.body)[0]
        let data = await mediafiredl(Func.isUrl(m.body)[0])
        //console.log(data)
        let capt = `*Title*: *${data.filename}*\n*Size*: *${data.filesizeH}*`
        
        
        hisoka.sendMessage(m.from, data.url, { mimetype: data.filetype, caption: capt, asDocument: true, fileName: data.filename}).catch(() => { return m.reply('error saat mengirim file')})
                   
            }catch(error){
                m.reply(error)
                }
        },
    isGroup: false
        }
        
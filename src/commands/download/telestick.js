import axios from 'axios'
import { downloader } from '@srart24/scraper'
export default {
    name: 'telestick',
    aliases: ['telesdl', 'dlstick'],
    type: 'download',
    desc: 'download sticker from tele',
    example: '%prefix%command https://t.me/addstickers/MannaNeapTink_by_fStikBot',
    execute: async({m,hisoka}) => {
        try {
            m.reply("wait")
            let url = Func.isUrl(m.body)[0]
            let { data } = await axios.get(`https://api.zahwazein.xyz/downloader/telesticker?apikey=zenzkey_8bc01f5847&url=${url}`)
            if (data.status !== 'OK') { 
                return m.reply('not found')
                } else {
                    for ( let x of data.result ) {
                        hisoka.sendMessage(m.from, x, { asSticker: true, quoted: null })
 
                        }
                    
                    }
            }catch(error){
                m.reply("error")
                let data = await downloader.telegramsticker(Func.isUrl(m.body)[0])
                                                            //console.log(data)
                let { result } = data
                result.map((v) => 
                           hisoka.sendMessage(m.from, v, { asSticker: true, quoted: m})
                     )      
                }
        },
    isOwner: true
    }
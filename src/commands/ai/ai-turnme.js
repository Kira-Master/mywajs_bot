import fs from 'fs'
import { TelegraPh } from '../../lib/lib.convert.js'
import axios from 'axios'
export default {
    name: 'turnme',
    type: 'ai',
    desc: 'turn your photo to anime style',
    execute: async({m, hisoka, quoted}) => {
        m.reply('wait, make sure the face is not covered ')
        try {
            
            let image = await hisoka.downloadMediaMessage(quoted)
            await fs.writeFileSync('kira.jpg', image)
            let file = await TelegraPh('kira.jpg')
            let data = await axios.get(`https://api.caliph.biz.id/api/animeai?img=${file}&apikey=caliphkey`)
            //m.reply(data)
            //console.log(data)
                            
            if ( data.status !== 200) { m.reply('server error, try again in 2 minutes')
                                                }else{
           hisoka.sendMessage(m.from, `https://api.caliph.biz.id/api/animeai?img=${file}&apikey=caliphkey`, { caption: '*success*', quoted: m}).catch(() => { return m.reply('failed, make sure image not blury')})
            fs.unlinkSync('kira.jpg')
                                                    }

     
            
            
            }catch(error){
                m.reply(error)
                }
        
        },
    isMedia: {
        Image: true
        }
    }

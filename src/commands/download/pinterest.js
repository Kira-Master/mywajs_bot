import { pinterest } from '@bochilteam/scraper'
import axios from 'axios'
import Nishino from 'nishino-project'
export default {
    name: 'pinterest',
    aliases: ['pin', 'pinimg'],
    type: 'search',
    desc: 'search image from pinterest',
    example: 'no query?!\n\n*Example*: %prefix%command light yagami icon',
    execute: async({ hisoka, m, message }) => {
        try {
            m.reply("wait")
            let data = await Nishino.image.pinterest(m.text)
            //console.log(data)
            
           
              hisoka.sendMessage(m.from, data.result.img, { caption: m.text, quoted: m })
                    
            } catch {
            
        m.reply('wait..')
        let txt = m.text
        let data = await pinterest(txt)
        
        //console.log(data)
        //for ( let i of data.result ) {
       let result = data[Math.floor(Math.random() * data.length)]
        hisoka.sendMessage(m.from, result, { caption: m.text, quoted: message })
                
            //}
            }
                
        }
   }
import { anoboy } from "@xct007/frieren-scraper";
import axios from 'axios'
import cheerio from 'cheerio'
export default {
    name: 'anoboylatest',
    type: 'information',
    desc: 'latest anime from anoboy',
    execute: async({m,hisoka}) => {
        try {
            m.reply("wait")
            let data = await anoboy.latest()
            //console.log(data)
            let capt = data.map((v) => `
*Title:* ${v.title}
*Update:* ${v.update}
*Watch:* ${v.url}
\n\n`).join`°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
            hisoka.sendMessage(m.from, data[0].thumbnail, { caption: capt, quoted: m })
                                
            }catch(error){
                m.reply(error)
                }
        }
    }

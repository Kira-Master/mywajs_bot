import { danbooru } from "@xct007/frieren-scraper"
import axios from 'axios'
export default {
    name: 'borusearch',
    type: 'search',
    desc: 'search image from danbooru',
    example: 'Example: %prefix%command girl cyberpunk style',
    execute: async({m,hisoka}) => {
        m.reply("wait")
        try {
            let data = await danbooru.search(m.text)
            let q = data[Math.floor(Math.random() * data.length)]
            hisoka.sendMessage(m.from, q.url, { caption: m.text, quoted: m})
            
            //console.log(data)
            }catch(error){
                m.reply("error, mencoba server 2")
                let q = m.text
                let { data } = await axios.get(`https://zeltoria.site/api/search/danbooru?q=${q}`)
                if (data.result.error === true) { return m.reply(data.result.message)
                                                 } else {
                let { result } = data
                let { url } = data.result
                //console.log(result)
                let hasil = result[Math.floor(Math.random() * result.length)]
                //console.log(hasil)
                hisoka.sendMessage(m.from, hasil.url, { caption: m.text +' server 2', quoted: m })
                                                     }
                
                }
        }
    }

import Nishino from 'nishino-project'
import axios from 'axios'
export default {
    name: 'hentai',
    type: 'random',
    desc: 'get random hentai',
    execute: async({m,hisoka}) => {
        try {
            let data = await Nishino.hentai.random()
            //console.log(data)
            let capt = `
*Title:* ${data.result.title}
*Views:* ${data.result.views}
*Published:* ${data.result.publised}
*Url:* ${data.result.url}
`
            hisoka.sendMessage(m.from, data.result.image, { caption: capt + data.warning, quoted: m })
            }catch(error){
                m.reply("error")
                let data = await axios.get(`https://raw.githubusercontent.com/AditPetani/khusus/main/nsfwvid.json`)
                console.log(data)
                                           
                }
        }
    }

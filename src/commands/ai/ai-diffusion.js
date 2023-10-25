import axios from 'axios'
import { Hercai } from 'hercai'
const client = new Hercai()
export default {
    name: 'aidiffusion',
    aliases: ['aiimage', 'generateimage', 'aidiff'],
    type: 'ai',
    desc: 'generate image by ai',
    example: 'No Query?!\n\nExample : %prefix%command girl+crying+at+night,blue+hair,wavy+hair, hair+short,+anime,japan+style',
    execute: async({ hisoka, m }) => {
            m.reply("wait")
        try {
            let diff = await client.drawImage({model:"v2",prompt: m.text})
            let teks = `*Model:* ${diff.model}\n*Prompt:* ${diff.prompt}`
            hisoka.sendMessage(m.from, diff.url, { caption: teks, quoted: m })
            //console.log(diff)
            }catch(error){
                console.error(error)
                m.reply("error")
                }
     
            //hisoka.sendMessage(m.from, img, { caption: `success generate image by query: ${m.text}`})
            }
            }
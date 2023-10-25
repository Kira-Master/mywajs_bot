import { textToImg } from 'dreamstudio.js';
import { encode, decode } from 'node-base64-image'
import fs from 'fs'
var apiKey = 'sk-qf4dBJ0p6IFY89VA55ovYfwefILzaXhLE57pz20ZIvCEZ3FD';
export default {
    name: 'dreamai',
    type: 'ai',
    desc: 'generate image from dreamai',
    example: 'Example: %prefix%command a cat in the moon with a space suit, photorealistic, 4k',
    execute: async({m, hisoka}) => {
        m.reply("wait")
        try {
            let images = await textToImg({
    apiKey,
    engineId: 'stable-diffusion-768-v2-1',
    text_prompts: [
      {
        text: m.text,
        weight: 1,
      },
    ],
  })
            //console.log(images)
            let q = images.artifacts[0].base64
            let pepek = await decode(q, { fname: 'zexxa', ext: 'jpg' })
            let kirim = fs.readFileSync('zexxa.jpg')
            hisoka.sendMessage(m.from, kirim, { caption: m.text, quoted: m})
            }catch(error){
                m.reply("error" +error)
                }
        },
    isPremium: true
    }

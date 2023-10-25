import { diffusion } from "@xct007/frieren-scraper";
import { writeFileSync } from "fs";
import axios from 'axios'
export default {
    name: 'txt2img',
    type: 'ai',
    desc: 'text to image anime',
    example: '%prefix%command 1girl,blue+hair,with+mask+dark+skin,highly+detailed,no+blur,devil',
    execute: async({m, hisoka}) => {
        m.reply('wait a sec...')
        try {
            let diff = await diffusion.stable(m.text, '')
            //console.log(diff)
            const buffer = Buffer.from(diff.base64Img, "base64")
            
            hisoka.sendMessage(m.from, buffer, { caption: 'process time: ' +diff.process_time +'milisecond', quoted: m})
                    
            }catch(error){
                console.error(error)
                m.reply("error" +'\n\ncant generate image you request')
                }
        }
    }
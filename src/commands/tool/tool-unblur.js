import axios from 'axios'
import { encode, decode } from 'node-base64-image'
import { TelegraPh } from '../../lib/lib.convert.js'
import fs from 'fs'
export default {
    name: 'unblur',
    type: 'tool',
    desc: 'unblur your image',
    execute: async({m, hisoka, quoted}) => {
        m.reply('processing, wait...')
        try {
            
            let file = await hisoka.downloadMediaMessage(quoted)
           await fs.writeFileSync('bahan.jpg', file)
            let media = await TelegraPh('bahan.jpg')
            let {data} = await axios.get(`https://api.itsrose.life/image/unblur?url=${media}&json=true&apikey=Rk-1391ea0ea580fe215cacbcb2`)
            let pepek = await decode(data.result.base64Image, { fname: 'zexxa', ext: 'jpg' })
            if ( data.status === true) {
                let kirim = await fs.readFileSync('zexxa.jpg')
                //console.log(data)
                
            
                hisoka.sendMessage(m.from, kirim, { caption: 'nih', quoted: m})
                fs.unlinkSync('zexxa.jpg')
                } else { 
                    m.reply('gagal')
                    }
            
            } catch(error) {
                console.error(error)
                m.reply('gagal request')
                }
        },
    isLimit: true,
    isMedia: {
        Image: true
        }
    }

            
    
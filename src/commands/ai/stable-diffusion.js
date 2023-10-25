import axios from 'axios'

export default {
    name: 'diffusion',
    aliases: ['diff'],
    type: 'ai',
    desc: 'generate image by ai',
    example: 'No Query?!\n\nExample : %prefix%command highly detailed, high contrass, sharp',
    execute: async({ hisoka, m }) => {
            let url = m.text
            hisoka.sendMessage(m.from, `https://api.xyroinee.xyz/api/ai/stablediffusion?q=${url}&apikey=HSe67DVntT`, { caption: `success generate image by query: ${url}`})
            }
            }
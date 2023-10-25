import config from '../../../config.js'
export default {
    name: 'sticknime',
    type: 'random',
    desc: 'generate random anime stick',
    execute: async({m,hisoka}) => {
        try {
            hisoka.sendMessage(m.from, `https://api.zahwazein.xyz/api/anime/sfw/waifu?apikey=zenzkey_8bc01f5847`, { asSticker: true, quoted: m})
            }catch(error){
                m.reply(error)
                }
        }
    }
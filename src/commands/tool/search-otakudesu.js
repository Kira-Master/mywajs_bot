import axios from 'axios'

export default {
    name: 'otakusearch',
    aliases: ['desusearch'],
    type: 'search',
    desc: 'search anime from otakudesu',
    example: 'no query?!\n\nExample: %prefix%command bleach',
    execute: async ({ m, hisoka }) => {
        let su = m.text
        let req = await axios.get(`https://api-fxc7.cloud.okteto.net/api/otakudesu/search?query=${su}&apikey=4mGSsdtdpoXC9E8`)
        if (req.data.status !== true) return m.reply('tidak ditemukan')
        let msgX = ''
        for ( let i of req.data.result ) {
            msgX += `*Title*: *${i.title}*\n*Genre*: *${i.genre}*\n*Status*: *${i.status}*\n*Rating*: *${i.rating}*\n*Url*: *${i.url}*\n\n`
            }
        hisoka.sendMessage(m.from, req.data.result[0].thumbnail, { caption: msgX, quoted: m })
        }
    }
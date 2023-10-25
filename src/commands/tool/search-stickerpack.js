import axios from 'axios'
export default {
    name: 'stickerpack',
    type: 'search',
    desc: 'search sticker from stickerpack',
    example: 'query?!\n\nExample: %prefix%command gojo satoru',
    execute: async({ m, hisoka }) => {
        try {
            let txt = m.text
            let { data } = await axios.get(`https://vihangayt.me/search/sticker?q=${txt}`)
            let {title, sticker_url} = data.data
            let acak = sticker_url[Math.floor(Math.random() * sticker_url.length)]
            //console.log(acak)
            if (data.status !== true) {
                m.reply('not found')
                } else {
                    hisoka.sendMessage(m.from, acak, { asSticker: true, packName: 'zexxa', packPublish: 'KIRA', quoted: m })
                    }
            }catch(error){
                m.reply("error")
                let q = m.text
                let {data} = await axios.get(`https://api.zahwazein.xyz/searching/stickersearch?query=${q}&apikey=zenzkey_8bc01f5847`)
                let { result } = data
                let acak = result[Math.floor(Math.random() * result.length)]
                hisoka.sendMessage(m.from, acak, { asSticker: true, quoted: m })
                }
        }
    }
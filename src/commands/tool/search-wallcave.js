import axios from 'axios'
export default { 
    name: 'wallcave',
    type: 'search',
    desc: 'search wallpaper',
    example: '%prefix%command anime aesthetic',
    execute: async({m, hisoka}) => {
        try {
            let txt = m.text
            let { data } = await axios.get(`https://zeltoria.site/api/search/wallpaper?q=${txt}`)
            if (data.status !== true) {
                m.reply('not found')
                } else {
                    hisoka.sendMessage(m.from, data.result.img, { caption: txt+'wallpaper', quoted: m })
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }

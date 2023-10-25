import mumaker from 'mumaker'

export default {
    name: 'blackpink',
    type: 'maker',
    desc: 'make image text from textpro',
    example: 'Example %prefix%command Zexxa+Bot',
    execute: async({m, hisoka}) => {
        try {
            let [m1, m2] = m.text.split`+`
            let img = await mumaker.textpro('https://textpro.me/create-blackpink-s-born-pink-album-theme-logo-online-1092.html', [m1, m2])
            if (!m2) {
                m.reply('where text 2?')
                      } else {
            //console.log(img)
            hisoka.sendMessage(m.from, img.image, { quoted: m})
                          }
             }catch(e){
                 console.error(e)
               }
        }
    }
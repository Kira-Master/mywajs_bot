import mumaker from 'mumaker'

export default {
    name: 'glitch',
    type: 'maker',
    desc: 'make image text from textpro',
    example: 'Example %prefix%command Zexxa+Bot',
    execute: async({m, hisoka}) => {
        try {
            let [m1, m2] = m.text.split`+`
            let img = await mumaker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [m1, m2])
            m.reply("wait")
            //console.log(img)
            hisoka.sendMessage(m.from, img.image, { quoted: m})
            }catch(e){

                }

        }

    }
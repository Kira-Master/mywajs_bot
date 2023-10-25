import mumaker from 'mumaker'

export default {

    name: 'amogus',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa+Bot',

    execute: async({m, hisoka}) => {

        try {
            let [m1, m2] = m.text.split`+`

            

            let img = await mumaker.textpro('https://ephoto360.com/tao-anh-banner-game-among-us-theo-ten-cua-ban-933.html', [m1, m2])

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
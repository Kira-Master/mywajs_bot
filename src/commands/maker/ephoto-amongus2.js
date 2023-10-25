import mumaker from 'mumaker'

export default {

    name: 'amogus2',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa Bot',

    execute: async({m, hisoka}) => {

        try {

            

            let img = await mumaker.textpro('https://ephoto360.com/tao-cover-anh-bia-game-among-us-online-932.html', m.text)

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
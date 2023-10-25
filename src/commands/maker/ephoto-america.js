import mumaker from 'mumaker'

export default {

    name: 'america',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa Bot',

    execute: async({m, hisoka}) => {

        try {

            

            let img = await mumaker.textpro('https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html', m.text)

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
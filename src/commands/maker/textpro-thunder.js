import mumaker from 'mumaker'

export default {

    name: 'thunder',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa Bot',

    execute: async({m, hisoka}) => {

        try {

            

            let img = await mumaker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', m.text)

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
import mumaker from 'mumaker'

export default {

    name: 'marvel',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa Bot',

    execute: async({m, hisoka}) => {

        try {
            let [m1, m2] = m.text.split`+`

            

            let img = await mumaker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [m1, m2])

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
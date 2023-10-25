import mumaker from 'mumaker'

export default {

    name: 'anonymous',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa Bot',

    execute: async({m, hisoka}) => {

        try {

            

            let img = await mumaker.textpro('https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html', m.text)

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
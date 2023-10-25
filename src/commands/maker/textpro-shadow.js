import mumaker from 'mumaker'

export default {
    name: 'shadow',
    type: 'maker',
    desc: 'make image text from textpro',
    example: 'Example %prefix%command Zexxa Bot',
    execute: async({m, hisoka}) => {
        try {
            
            let img = await mumaker.textpro('https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html', m.text)
            //console.log(img)
            hisoka.sendMessage(m.from, img.image, { quoted: m})
            }catch(e){
                console.error(e)
                }
        }
    }
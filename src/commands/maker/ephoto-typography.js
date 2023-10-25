import mumaker from 'mumaker'

export default {

    name: 'typography',

    type: 'maker',

    desc: 'make image text from textpro',

    example: 'Example %prefix%command Zexxa Bot',

    execute: async({m, hisoka}) => {

        try {

            

            let img = await mumaker.textpro('https://ephoto360.com/tao-hieu-ung-chu-nghe-thuat-typography-nhieu-lop-truc-tuyen-1007.html', m.text)

            //console.log(img)

            hisoka.sendMessage(m.from, img.image, { quoted: m})

            }catch(e){

                }

        }

    }
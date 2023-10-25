import canvas from 'canvas'
export default {
    name: 'ttp',
    aliases: ['text2pict', 'txt2pict'],
    type: 'convert',
    desc: 'create custom sticker',
    example: '%prefix%command zexxa bot',
    execute: async({m, hisoka}) => {
        try {
            canvas.registerFont('./src/lib/font/font3.ttf', { family: 'SF-Pro' })

        let length = m.text.length
        var font = 90
        if (length > 12) font = 68
        if (length > 15) font = 58
        if (length > 18) font = 55
        if (length > 19) font = 50
        if (length > 22) font = 48
        if (length > 24) font = 38
        if (length > 27) font = 35
        if (length > 30) font = 30
        if (length > 35) font = 26
        if (length > 39) font = 25
        if (length > 40) font = 20
        if (length > 49) font = 10

        var ttp = {}
        ttp.create = canvas.createCanvas(576, 576)
        ttp.context = ttp.create.getContext('2d')
        ttp.context.font = `${font}px SF-Pro`
        ttp.context.strokeStyle = 'black'
        ttp.context.lineWidth = 3
        ttp.context.textAlign = 'center'
        ttp.context.strokeText(m.text, 290, 300)
        ttp.context.fillStyle = 'white'
        ttp.context.fillText(m.text, 290, 300)
            hisoka.sendMessage(m.from, ttp.create.toBuffer(), { asSticker: true, packName: 'ZEXXA', packPublish: 'kira', quoted: m})
            }catch(error){
                m.reply(error)
                }
        
        }
    }
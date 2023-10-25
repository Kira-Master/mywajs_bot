import { search } from 'scraper-jsc'
export default {
    name: 'jadwaltv',
    type: 'information',
    desc: 'get detail tv schedule',
    example: 'Example: %prefix%command antv\n\nList TV: gtv, antv, indosiar, inewstv, kompastv, metrotv, mnctv, moji, nettv, rcti, rtv, sctv, trans7, transtv, tvone, tvri',

    execute: async({m,hisoka}) => {
        try {
            m.reply("wait")
            
            let data = await search.JadwalTV(m.text)
            //console.log(data)
            if (data.status !== true) return m.reply("tv tidak ada, pastikan tv ada di list")
            let capt = `${data.result}
`
            m.reply(capt)
             }catch(e){
                m.reply(e)
                }
        }
    }
                       

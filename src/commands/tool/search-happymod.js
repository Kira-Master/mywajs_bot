import nevt from 'nevt-api'
export default {
    name: 'happymod',
    aliases: ["hmsearch", "modhappy"],
    type: 'search',
    desc: 'search mod apk',
    example: 'Example: %prefix%command stickman',
    execute: async({m, hisoka}) => {
        try {
            m.reply("wait")
            let data = await nevt.search.happymod(m.text)
            
            let capt = data.data.map((v) => `*Title:* ${v.judul}
*Rate:* ${v.rating}
*Link:* ${v.link}
\n\n`).join`°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
            //m.reply(capt)
            hisoka.sendMessage(m.from, data.data[0].thumb, { caption: capt, quoted: m })
                          
            //console.log(data)
            }catch(error){
                m.reply(error)
                }
        }
    }
import { Odesus } from 'odesus';
const odesu = new Odesus()
export default {
    name: 'otakudesu',
    type: 'search',
    desc: 'search anime in otakudesu server',
    example: 'Example: %prefix%command bleach',
    execute: async({m,hisoka}) => {
        m.reply("wait")
        try {
           let item = await odesu.search(m.text)
                let capt = '*OTAKUDESU SEARCH*'
                for ( let i of item ) {
           
            capt += `

*_Title: ${i.name}_*
*_Status: ${i.status}_*
*_Rating: ${i.rating}_*
*Genres:* ${i.genres[0, 1, 2].name}\n*Url Genres*:${i.genres[0].url}
*Link:* ${i.url}
`}
            hisoka.sendMessage(m.from, item[0].image, {caption: capt, quoted: m })
            }catch(error){
                console.error(error)
                m.reply("error")
                }
        }
    }
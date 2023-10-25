import fs from 'fs'
export default {
    name: 'gore',
    type: 'random',
    desc: 'random gore videos',
    execute: async({m, hisoka}) => {
        try {
            let data = await fs.promises.readFile('./src/lib/VideoGore.json', 'utf8');
            let res = JSON.parse(data)
            const jsonArray = Object.values(res)
           // let { url } = jsonArray
            let acak = jsonArray[Math.floor(Math.random() * jsonArray.length)]
            
            //console.log(acak)
            hisoka.sendMessage(m.from, acak.url, { caption: '*ngeri kali bang*', quoted: m })
            }catch(error){
                m.reply(error)
                }
        }
    }
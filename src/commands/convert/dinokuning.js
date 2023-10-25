import fs from 'fs'
import axios from 'axios'
export default {
    name: 'dinokuning',
    type: 'random',
    desc: 'yellow dino',
    execute: async({m,hisoka}) => {
        try {
            let data = await fs.promises.readFile('./src/lib/dinokuning.json', 'utf8');
    let res = JSON.parse(data)
            const jsonArray = Object.values(res)
    let result = jsonArray[Math.floor(Math.random() * jsonArray.length)];
    console.log(result);
    hisoka.sendMessage(m.from, result, { asSticker: true, quoted: m });
            }catch(error){
                m.reply(error)
                }
        }
    }
import { music } from "@xct007/frieren-scraper";
export default {
    name: 'findmusic',
    type: 'random',
    desc: 'find random music',
    example: '%prefix%command eminem',
    execute: async({m,hisoka}) => {
        try {
            let data = await music.search(m.text)
            let qq = data[Math.floor(Math.random() * data.length)]
            hisoka.sendMessage(m.from, qq.audio, { caption: qq.title, quoted:m, asDocument: true, fileName: qq.title +'.mp3'})
            //console.log(data)
            }catch(error){
                m.reply("error")
                }
        }
    }
      
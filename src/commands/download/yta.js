import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'
export default {
    name: 'mp3',
    aliases: ['ytmp3', 'yta', 'ytaudio'],
    type: 'download',
    desc: 'download audio from youtube',
    example: 'Example: %prefix%command url',
    execute: async({m, hisoka}) => {
        m.reply("wait")
        try {
            let q = '128kbps'
            let data = await youtubedl(Func.isUrl(m.body)[0])
            let dl_url = await data.audio[q].download()
            
            hisoka.sendFile(m.from, dl_url, { asDocument: true, mimeType: 'audio/mpeg', fileName: data.title+'.mp3', quoted: m })
            }catch(error){
                m.reply("error" +error)
                }
        }
    }
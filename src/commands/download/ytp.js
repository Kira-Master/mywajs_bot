import axios from 'axios'
import {
youtubedl, youtubedlv2 
} from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch'
export default {
    name: 'play',
    aliases: ['ytplay'],
    type: 'download',
    desc: 'play music by query',
    example: 'No query?!\n\nExample : %prefix%command hbrp - tokyo milk',
    execute: async({ hisoka, m, message }) => {
        m.reply("wait")
        try {
            
           let nok = m.text
            let search = await yts(nok)
            let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
            if (!search) throw 'Tidak Ditemukan'
            let { title, thumbnail, timestamp, views, ago, url } = vid
            let captvid = `╭──── 〔 Y O U T U B E 〕
• Judul: ${title}
• Durasi: ${timestamp}
• Views: ${views}
• Upload: ${ago}
• Link: ${url}
• Note: Untuk Video Ketik .mp4 Masukan Link Atas
• Contoh: .mp4 ${url}
╰────────⬣`
            hisoka.sendMessage(m.from, thumbnail, { caption: captvid, quoted: m })
            //let ttw = Func.isUrl(url)[0]
            
            let dl = await youtubedl(url)
            let { fileSize, quality, fileSizeH } = dl.audio['128kbps']
            let dl_url = await dl.audio['128kbps'].download()
            if (fileSize >= '10000') {
                return m.reply("dlFree")
                } else {
            //console.log(dl)
          hisoka.sendFile(m.from, dl_url, { ptt: true, quoted: m })
                    }
                                              
        }catch(error){
            console.error(error)
            m.reply('error bang, lapor ke owner\n\n' +error)
            hisoka.sendMessage("6282136278036" +'@c.us', 'fitur %command error bang' +error)
            }

    },

    isLimit: true

}
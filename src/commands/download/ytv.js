import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'
export default {
    name: 'mp4',
    type: 'download',
    aliases: ['ytv', 'ytmp4', 'ytvideo'],
    desc: 'youtube mp4 downloader',
    example: 'Example: %prefix%command url',
    execute: async({m, hisoka}) => {
        m.reply("wait")
        try {
            let dl = await youtubedl(Func.isUrl(m.body)[0])
            let q = '480p'
            let { title, id, thumbnail } = dl
            let { fileSize, fileSizeH } = dl.video[q]
            let captvid = `╭──── 〔 𝗬 𝗢 𝗨 𝗧 𝗨 𝗕 𝗘 〕
• 𝗝𝘂𝗱𝘂𝗹: ${title}
• 𝗟𝗶𝗻𝗸: https://youtube.com/watch?v=${id}

𝙩𝙮𝙥𝙚 !𝙢𝙥3 𝙩𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙖𝙪𝙙𝙞𝙤..
╰────────⬣`
            let dl_url = await dl.video[q].download()
            if (fileSize >= '30000') {
                return m.reply("dlFree")
                }else{
            hisoka.sendFile(m.from, dl_url, { caption: captvid, quoted: m})
                    }
            }catch(error){
                m.reply("error" +error)
                }
        }
    }
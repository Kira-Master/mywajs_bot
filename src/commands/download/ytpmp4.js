import Nishino from 'nishino-project'
import axios from 'axios'
import fetch from 'node-fetch'
export default {
    name: 'playmp4',
    aliases: ['ytpmp4'],
    type: 'download',
    desc: 'play video from youtube',
    example: 'Example: %prefix%command puh sepuh ajarin dong puh',
    execute: async({m, hisoka}) => {
        //m.reply("wait")
        try{
            let data = await Nishino.download.youtube_play_mp4(m.text)
            //console.log(data)
            let {url} = data.result
            //if ( data.code !== null) { return
                                    m.reply("wait")
                let capt = `
*Title:* ${data.result.title}
*Views:* ${data.result. views}
*Duration:* ${data.result.length_seconds} Seconds
*Channel:* ${data.result.channel}
*Url:* ${data.result.youtube_url}
*Published:* ${data.result.published}
*Category:* ${data.result.category}
`
                hisoka.sendMessage(m.from, data.result.url, { caption: capt, quoted: m })
                                    //}else{
                                        //m.reply("error")
                                       //}
            }catch(error){
                console.error(error)
                m.reply('error, trying server 2, please wait...')
                let q = m.text
                let { data } = await axios.get(`https://api.akuari.my.id/downloader/play2?query=${q}`)
                //console.log(data)
                let { title, uploadDate, channel } = data.info
                let { link, quality } = data.urldl_video
               // let acak = url[Math.floor(Math.random() * url.length)]
                //console.log(acak)
                //if (size >= 30000000) return m.reply("Size over 30MB")
                let capt = `
*Title:* ${title}
*Size:* ${link.length} KB
*Source:* ${channel}
*Quality:* ${quality}
`
                //m.reply(capt)
                hisoka.sendMessage(m.from, link, { caption: capt, quoted: m }).catch(() => { return m.reply("error")
                                                                                           })
                }
                },
    isPremium: true
        }
    
    
            
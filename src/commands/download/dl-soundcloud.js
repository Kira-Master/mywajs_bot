import axios from 'axios'
export default { 
    name: 'soundclouddl',
    aliases: ['scdl', 'dlsc'],
    type: 'download',
    desc: 'download from soundcloud link',
    example: 'Example: %prefix%command https://soundcloud.com/user-730830805/eminem-50-cent-2pac-biggie-without-me-remix-ft-snoop-dogg-dr-dre-ice-cube-eazy-e',
    execute: async({m, hisoka}) => {
        m.reply('wait a sec..')
        try {
            let q = Func.isUrl(m.body)[0]
            let { data } = await axios.get(`https://api.zahwazein.xyz/downloader/soundcloud?apikey=zenzkey_8bc01f5847&url=${q}`)
            if ( data.status !== 'OK' ) {
                m.reply('failed..')
                }else{
                    hisoka.sendMessage(m.from, data.result.media.url, { asDocument: true, fileName: data.result.title, mimeType: 'audio/mpeg', caption: 'Nih Bang', quoted:m })
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }
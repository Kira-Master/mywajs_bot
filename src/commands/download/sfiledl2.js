import { sfilemobi } from '@bochilteam/scraper-downloader'
export default {
    name: 'sfiledl',
    aliases: ['dlsfile'],
    type: 'download',
    desc: 'download sfile',
    example: 'no url?!\n\nExample: %prefix%command https://sfile.mobi/4MzKw9ca1iN',
    execute: async ({m, hisoka}) => {
        let data = await sfilemobi(Func.isUrl(m.body)[0])
        if (data?.err) return m.reply('masukan url dengan benar')
        //console.log(data)
        let msgX = `*File Name*: ${data.filename}\n*Upload By*: ${data.aploudby}\n*Total Download*: ${data.downloads}`
        hisoka.sendMessage(m.from, data.url, { asDocument: true, fileName: data.filename, mimetype: data.mimetype, caption: msgX, quoted: m })
        }
    }

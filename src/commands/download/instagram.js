
export default {
    name: 'instagram',
    aliases: ['ig', 'igdl'],
    type: 'download',
    desc: 'downloader video and photo instagram',
    example: 'No Urls?!\n\nExample : %prefix%command https://www.instagram.com/reel/CqIrJimDXtD/?igshid=NTc4MTIwNjQ2YQ==',
    execute: async({ hisoka, m, message }) => {
        m.reply('wait..')
        let request = await (new api('zxb')).get('/downloader/igdl2', { link: Func.isUrl(m.body)[0] })
        //console.log(request)
        if (request.data?.err) return m.reply("error")
        for (let result of request.data.respon) {

            hisoka.sendMessage(m.from, result.url, { caption: 'Sama-sama', quoted: message })
            }

        },
      isLimit: true
    }



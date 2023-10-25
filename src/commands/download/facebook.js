export default {
    name: 'facebook',
    aliases: ['fb', 'fbdl'],
    type: 'download',
    desc: 'downloader video facebook',
    example: 'No Urls?!\n\nExample : %prefix%command https://fb.watch/',
    execute: async({ hisoka, m, message }) => {
        try {
        m.reply('wait..')
        let request = await (new api('zxb')).get('/downloader/fbdl2', { link: Func.isUrl(m.body)[0] })
        //console.log(request)
        
        for ( let result of request.data.hasil ) {

            hisoka.sendMessage(m.from, result.url, { caption: 'nih bang', quoted: message })

        }
            }catch(error){
                m.reply(error)
                }

    },

    isLimit: true

}
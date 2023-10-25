export default {
    name: 'twitter',
    aliases: ['twitterdl'],
    type: 'download',
    desc: 'downloader video twitter',
    example: 'No Urls?!\n\nExample : %prefix%command https://twitter.com/AMAZlNGNATURE/status/1656514215665082368?s=19',
    execute: async({ hisoka, m, message}) => {
        let req = await (new api('zxb')).get('/downloader/twitter', { link: Func.isUrl(m.body)[0] })

        //console.log(req)

        if (req.data?.err) return m.reply("error")

        //for (let result of req.data.HD) {

            hisoka.sendMessage(m.from, req.data.HD, { caption: req.data.desc, quoted: message })

     // }

    },

    isLimit: true

}
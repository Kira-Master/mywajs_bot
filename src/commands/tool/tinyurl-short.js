import axios from 'axios'

export default {
    name: 'tinyurl',
    aliases: ['tiny', 'shorturl'],
    type: 'tool',
    desc: 'short your url with tinyurl server',
    example: 'No query?!\n\n *Example*: %prefix%command https://fauziganteng.my.id/',
    execute: async({ hisoka, m, message }) => {
        let txt = Func.isUrl(m.body)[0]
        let { data } = await axios.get(`https://api.akuari.my.id/short/tinyurl?link=${txt}`)
        let msgX = `*Long URL*: *${data.url_asli}*\n*Short URL*: *${data.hasil}*`
        hisoka.sendMessage(m.from, msgX)
        }
    }
        

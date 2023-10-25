import axios from 'axios'
export default {
    name: 'soundcloud',
    aliases: ['scsearch'],
    type: 'search',
    desc: 'search from soundcloud',
    example: 'Example: %prefix%command mockingbird eminem',
    execute: async({m, hisoka}) => {
        try {
            let q = m.text
            let { data } = await axios.get(`https://zeltoria.site/api/search/soundcloud?q=${q}`)
            if ( data.status === true ) {
                 let msgX = ''
                 for ( let x of data.result ) {
                     msgX += `*Title*: ${x.judul}\n*Link*: ${x.link}\n\n`
                     }
                hisoka.sendMessage(m.from, msgX)
                }else{
                    m.reply('error')
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }


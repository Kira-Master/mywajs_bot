import axios from 'axios'
export default {
    name: 'quotes',
    type: 'random',
    execute: async({ m, hisoka }) => {
        try {
            let {data} = await axios.get(`https://api.anna.biz.id/api/random/quotes`)
            if ( data.status !== 200) {
                m.reply('not found')
                } else {
                    hisoka.sendMessage(m.from, `*_${data.result.quotes}_*\n\n_${data.result.author}_`)
                    }
            } catch(error) {
                console.error(error)
                m.reply(error)
                }
        }
    }
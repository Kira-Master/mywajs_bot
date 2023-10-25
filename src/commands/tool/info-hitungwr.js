import axios from 'axios'
export default {
    name: 'hitungwr',
    type: 'information',
    desc: 'count your win rate mobile legends',
    example: 'Example: %prefix%command total_match|your_wr|target_wr',
    execute: async({m, hisoka}) => {
        try {
            let [text1, text2, text3] = m.text.split`+` || m.text.split`|`
            let { data } = await axios.get(`https://api.zahwazein.xyz/information/hitungwr?apikey=zenzkey_8bc01f5847&text=${text1}&text2=${text2}&text3=${text3}`)
            if (!text2) {
                m.reply('how much your wr?')
                } else if(!text3) {
                    m.reply('what your wr target?')
                    } else {
                        hisoka.sendMessage(m.from, `*Your Winrate*: ${data.result.total_winrate}\n*Total Match*: ${data.result.total_match}\n*Req Winrate*: ${data.result.req_winrate}\n\n*Result*: ${data.result.description}`)
                        }
            }catch(error){
                m.reply(error)
                }
        }
    }
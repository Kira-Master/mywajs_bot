import axios from 'axios'
export default {
    name: 'vidmeme',
    type: 'random',
    desc: 'random meme',
    execute: async({m,hisoka}) => {
        try {
            let { data } = await axios.get(`https://xzn.wtf/api/randommeme?apikey=zexxabot`)
            if(data.status === null) { return
                                      m.reply('error')
                                      }else{
                                          hisoka.sendMessage(m.from, data.media, { caption: data.caption, quoted: m })
                                          }
            }catch(error){
                m.reply(error)
                }
        }
    }
                                                                                  
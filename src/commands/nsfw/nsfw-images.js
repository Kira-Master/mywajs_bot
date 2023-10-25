import Nsfw from 'nsfw-images'
const KazeClient = new Nsfw.Client()
export default {
    name: 'realnsfw',
    type: 'nsfw',
    desc: 'get nsfw real random',
    execute: async({m,hisoka}) => {
        try {
            let data = await KazeClient.nsfw.real.random()
            hisoka.sendMessage(m.from, data.url, { caption: data.source, quoted: m })
            console.log(data)
            }catch(e) {
                m.reply(e)
                }
        },
    isPremium: true
    }
            
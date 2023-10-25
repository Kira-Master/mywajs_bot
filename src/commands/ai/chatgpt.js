import axios from 'axios'
export default {
    name: 'ai',
    type: 'ai',
    desc: 'chat gpt',
    example: '%prefix%command halo ai',
    execute: async({m}) => {
        let q = m.text
        let { data } = await axios.get(`https://xzn.wtf/api/openai?text=${q}&apikey=zexxabot`)
        return m.reply(data.result)
        }
    }
   
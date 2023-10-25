import axios from 'axios'

export default {
    name: 'expandurl',
    type: 'tool',
    desc: 'expand url from short url',
    example: 'no url?!\n\nExample: %prefix%command http://tinyurl.com/2y62exdm',
    execute: async({ m, hisoka }) => {
        let url = Func.isUrl(m.body)[0]
        let { data } = await axios.get(`https://api-fxc7.cloud.okteto.net/api/tools/get-url-redirect?url=${url}&apikey=4mGSsdtdpoXC9E8`)
        let msgX = `${data.result}`
        await hisoka.sendMessage(m.from, msgX)
        }
    }
import axios from 'axios'
import { parseResult } from '../../lib/tools.js'
export default {
    name: 'igstalk',
    type: 'stalker',
    desc: 'stalk ig by username',
    example: 'no username?!\n\nExample: %prefix%command paujikerenbanget',
    execute: async({m, hisoka}) => {
        let txt = m.text
        let req = await axios.get(`https://xzn.wtf/api/igstalk?user=${txt}&apikey=zexxabot`)
        //m.reply(await parseResult('IG STALK', req.data, 'hasil'))
        let msgE = `Lapor Fitur Error Bang`
        if (req.data?.err) return hisoka.sendMessage("6282135278036@c.us", msgE) 
        let msgX = `*Username*: *${req.data.username}*\n*Fullname*: *${req.data.fullname}*\n*Posts*: *${req.data.posts}*\n*Followers*: *${req.data.followers}*\n*Following*: *${req.data.following}*\n*Bio*: ${req.data.bio}\n`
        hisoka.sendMessage(m.from, msgX)
        }
    }
        
  
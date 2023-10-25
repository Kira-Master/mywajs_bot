import { groupWA } from '@bochilteam/scraper-sosmed'
import { parseResult } from '../../lib/tools.js'
export default {
    name: 'grupwa',
    aliases: ['wagroup', 'gcwa'],
    type: 'search',
    desc: 'search whatsapp group',
    example: 'no query?!\n\nExample: %prefix%command otaku indonesia',
    execute: async({ m, hisoka }) => {
        
        let data = await groupWA(m.text)
        //console.log(data)
        let msgX = ''
        for ( let i of data) {
            msgX += `${i.subject}\n${i.url}\n\n`
            }
        m.reply(msgX)
        }
    }
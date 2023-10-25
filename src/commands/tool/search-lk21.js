import fetch from 'node-fetch'
import Nishino from 'nishino-project'
export default {
    name: 'lk21search',
    type: 'search',
    desc: 'search lk21 movie',
    example: '%prefix%command fast furious',
    execute: async ({ m }) => {
        try {
            let txt = m.text
            let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${txt}`)
            let json = await res.json()
            json = json.result.map((v) => `*Title:* ${v.judul}\n*Link:* ${v.link}\n*Category:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(json)
            }catch(error){
                m.reply("error")
                
                }
        }
    }


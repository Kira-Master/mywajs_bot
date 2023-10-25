import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
export default {
    name: 'text2speech',
    aliases: ['tts'],
    type: 'convert',
    desc: 'text to speech',
    example: 'Example: %prefix%command aku adalah zexxa bot',
    execute: async({m,hisoka}) => {
        m.reply("wait")
        try {
            let q = await tts(m.text, 'en')
            hisoka.sendMessage(m.from, q, { ptt: true })
            }catch(error){
                console.error(error)
                m.reply("error")
                }
        },
    isLimit: true
    }



function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = ((import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
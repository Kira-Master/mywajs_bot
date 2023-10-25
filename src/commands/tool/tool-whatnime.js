import { TelegraPh } from '../../lib/lib.convert.js'
import fetch from 'node-fetch'
import fs from 'fs'
export default {
    name: 'whatnime',
    type: 'tool',
    desc: 'search anime by image',
    execute: async({m, hisoka, quoted}) => {
        try {
            let img = await hisoka.downloadMediaMessage(quoted)
            await fs.writeFileSync('whatnime.jpg', img)
            let file = await TelegraPh('whatnime.jpg')
            /*if(!img) {
                m.reply('error')
                }*/
            await m.reply('wait...')
            let res = await fetch(`https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(file)}`)
            let json = await res.json()
            let { id, idMal, title, synonyms, isAdult } = json.result[0].anilist;
	let { filename, episode, similarity, video, image } = json.result[0];
	let _result = `*Title :* ${title.romaji} (${title.native})\n*Synonyms :* ${synonyms}\n*Adult :* ${isAdult}\n*Similiarity :* ${(similarity * 100).toFixed(1)}\n*Episode :* ${episode}`;
            hisoka.sendMessage(m.from, image, { caption: _result, quoted: m })
            }catch(error){
                m.reply(error)
                }
        },
    isMedia: {
        Image: true
        }
    }
            
		

	
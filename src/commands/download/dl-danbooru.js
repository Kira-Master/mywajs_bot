import axios from 'axios'
import cheerio from 'cheerio'
export default {
    name: 'danboorudl',
    type: 'download',
    desc: 'download from danbooru',
    example: 'no url?!\n\nExample: %prefix%command url',
    execute: async({ m, hisoka }) => {
        try {
            let url = Func.isUrl(m.body)[0]
            let data = await danbooruDl(url), img = data.url
            delete data.url
            let capt = Object.keys(data).map((x) => `${x}: ${data[x]}`).join`\n`
            hisoka.sendMessage(m.from, img, { caption: capt, quoted: m })
            
            }catch(error){
                m.reply('error ngab\n\n' +error)
                }
            }
        }
    
    
    
    
    
    export async function danbooruDl(url) {

	let html = (await axios.get(url)).data

	let $ = cheerio.load(html), obj = {}

	$('#post-information > ul > li').each((idx, el) => {

		let str = $(el).text().trim().replace(/\n/g, '').split(': ')

		obj[str[0]] = str[1].replace('»', '').trim().split(' .')[0]

	})

	obj.url = $('#post-information > ul > li[id="post-info-size"] > a').attr('href')

	return obj

}
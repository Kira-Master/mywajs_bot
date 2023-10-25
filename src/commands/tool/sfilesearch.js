import cheerio from 'cheerio'
import axios from 'axios'
export default {
    name: 'sfilesearch',
    aliases: ['carisfile', 'sfile'],
    type: 'search',
    desc: 'search sfile mobi file',
    example: '%prefix%command telkomsel',
    execute: async({m, hisoka}) => {
        try {
            let data = await sfileSearch(m.text, '1')
            console.log(data)
           let res = data.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`

		m.reply(res)
            }catch(error){
                m.reply(error)
                }
        }
    }




async function sfileSearch(query, page = 1) {

	let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)

	let $ = cheerio.load(await res.text())

	let result = []

	$('div.list').each(function () {

		let title = $(this).find('a').text()

		let size = $(this).text().trim().split('(')[1]

		let link = $(this).find('a').attr('href')

		if (link) result.push({ title, size: size.replace(')', ''), link })

	})

	return result

}

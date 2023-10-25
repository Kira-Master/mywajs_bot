import axios from "axios"
import PDFDocument from "pdfkit"
import fetch from "node-fetch"

export default {
    name: 'nhentaidl',
    type: 'download',
    desc: 'download nhentai by code',
    example: 'code?!\n\nExample: %prefix%command 452243',
    execute: async({m,hisoka,config}) => {
        m.reply(config.msg.wait)
        try {
            
            let nh = await nhentaiScraper(m.text)
            //console.log(nh)
            let pages = []
                       nh.images.pages.map((v, i) => {
			let ext = new URL(v.t).pathname.split('.')[1]
			pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${nh.media_id}/${i + 1}.${ext}`)
		})
            let topdf = await toPDF(pages)
            hisoka.sendMessage(m.from, topdf, { asDocument: true, mimeType: 'application/pdf', fileName: nh.title.english +'pdf', quoted: m })
                               
            }catch(error){
                m.reply(error)
                }
        },
    isPremium: true
    }



async function nhentaiScraper(id) {
	let uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'
	let html = (await axios.get(uri)).data
	return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data
}

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}

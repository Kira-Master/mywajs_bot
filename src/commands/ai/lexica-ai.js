import { LexicaAPI } from 'lexica-api'
const lexica = new LexicaAPI()
export default { 
    name: 'lexicaai',
    type: 'ai',
    desc: 'lexica ai',
    example: 'Example: %prefix%command prompt',
    execute: async({m,hisoka}) => {
        try {
            let { images } = await lexica.search(m.text)
            
            //console.log(images)
            let qe = images[Math.floor(Math.random() * images.length)]
            hisoka.sendMessage(m.from, qe.src, {caption: m.text, quoted:m})
            }catch(error){
                m.reply("error")
                }
        }
    }
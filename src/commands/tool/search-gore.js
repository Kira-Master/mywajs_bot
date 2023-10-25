import nevt from 'nevt-api'
export default {
    name: 'searchgore',
    type: 'search',
    desc: 'search gore video',
    example: 'Example: %prefix%command murder',
    execute: async({m, hisoka}) => {
        try {
            let res = await nevt.search.gore(m.text)
            //console.log(res)
            //let { link, judul, uploader } = res.data
            let puki = res.data
            //console.log(puki)
            
            if (res.status === true) { return m.reply("berhasil mendapat data, sedang mengirim...")
                                      let mmk = puki[Math.floor(Math.random() * puki.length)]
                                      let capt = `
*Title:* ${mmk.judul}
`
hisoka.sendMessage(m.from, res.data[0].thumb, { caption : capt, quoted: m })

                                      }else{
                                           m.reply("error")
                                           }
            //console.log(res)
            }catch(error){
                console.error(error)
                }
        }
    }
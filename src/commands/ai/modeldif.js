import fetch from 'node-fetch'
export default {
    name: 'modeldiff',
    type: 'search',
    desc: 'model diffusion from civit ai',
    example: '%prefix%command number',
    execute: async({m, hisoka}) => {
        try {
            let q = m.text
            let res = await fetch('https://civitai.com/api/v1/models')
        let jso = await res.json()
        let resu = jso.items[q].modelVersions[0].images[0].meta.prompt
        await m.reply(resu)
            }catch(error){
                m.reply(error)
                }
        }
    }
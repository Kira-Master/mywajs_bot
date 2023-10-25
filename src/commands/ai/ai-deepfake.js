import axios from 'axios'

import fs from 'fs'

import { TelegraPh } from '../../lib/lib.convert.js'

export default {

    name: 'deepfake',

    type: 'ai',

    desc: 'deep fake ai',

    execute: async({m,hisoka,quoted}) => {
        m.reply('processing, please wait...')

        try{

            let media = await hisoka.downloadMediaMessage(quoted)

            fs.writeFileSync('deep_fake.jpg', media)

            let file = await TelegraPh('deep_fake.jpg')

            const payloads = {	

	            init_image: file,

               	style: "random",

            }

            const {data} = await axios.request({

           		baseURL: "https://api.itsrose.life",

		        url: "/deep_fake/video",

		        method: "POST",

		        data: payloads,

		        params: {

			        apikey: "Rk-1391ea0ea580fe215cacbcb2",

		        },

	        })
            if(data.status === true) {

	        hisoka.sendMessage(m.from, data.result.video, { caption: 'wkwkwk', quoted: m })
                } else {
                    m.reply('error')
                    }

	        

	        //console.log(data)

	        }catch(error){

	            m.reply(error)

	            }

	        },
    isMedia: {
        Image: true
        },
    isPremium: true

	        }

	        

            
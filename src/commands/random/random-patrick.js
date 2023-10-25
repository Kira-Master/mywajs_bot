export default {
    name: 'patrick',
    type: 'random',
    execute: async({m, hisoka}) => {
        try {
            hisoka.sendMessage(m.from, `https://api.zahwazein.xyz/randomimage/patrick?apikey=zenzkey_8bc01f5847`, { asSticker: true, packName: 'zexxa', packPublish: 'KIRA', quoted:m })
            }catch(error){
                m.reply(error)
                }
        }
    }
                
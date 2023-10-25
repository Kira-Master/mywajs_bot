export default {
    name: 'darkjoke',
    type: 'random',
    execute: async({m, hisoka}) => {
        try {
            hisoka.sendMessage(m.from, `https://api-fxc7.cloud.okteto.net/api/random/dark-jokes?apikey=4mGSsdtdpoXC9E8`, { caption: '*dark banget wir🗿*', quoted: m })
            } catch(error) {
                console.error
                m.reply('not found')
                hisoka.sendMessage("6282135278036" +'@c.us', error)
                }
        }
    }
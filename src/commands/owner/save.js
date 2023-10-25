export default {
    name: 'saveme',
    execute: async({m, hisoka}) => {
        try {
            hisoka.saveContact(m.sender).then(() => { return m.reply("oke bang")}).catch(() => { return m.reply("gamau")})
            } catch(error) {
                console.error(error)
                m.reply(error)
                }
        },
    isOwner: true
    }

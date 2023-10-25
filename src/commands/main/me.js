export default {
    name: 'me',
    aliases: ['mylimit', 'myinfo'],
    type: 'main',
    desc: 'display your info',
    execute: async({m}) => {
        try {
        let pepek = global.db.users[m.sender]
        let capt = `
*Name:* ${pepek.name}
*Limit:* ${pepek.limit}
*Premium:* ${pepek.premium}
*VIP:* ${pepek.VIP}
*Registered:* ${pepek.registered}
*Banned:* ${pepek.banned}
`
        m.reply(capt)
        }catch(error){
            console.error(error)
            }
        }
    }
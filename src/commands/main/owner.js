

export default {
    name: 'owner',
    aliases: ['develer'],
    type: 'main',
    execute: async({ hisoka, m }) => {
        let contacts = []
        //for (const contact of global.owner) {
            contacts.push(await hisoka.getContactById("6282135278036" + '@c.us'))
        m.reply('_gaada kepentingan jangan chat bang_')
       // }
        
        m.reply(contacts)
    }
}

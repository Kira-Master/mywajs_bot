import { loadDatabase } from '../../lib/whatsapp.database.js'
export default {
    name: 'me',
    typs: 'information',
    execute: async({m,hisoka}) => {
        let user = global.db.users[m.sender]
        //console.log(user)
        let teks = `*Limit:* ${user.limit}\n*Premium:* ${user.premium}\n*Owner:* ${user.VIP}\n*Name:* ${user.name}\n*Banned:* ${user.banned}`
        m.reply(teks)

        }
    }

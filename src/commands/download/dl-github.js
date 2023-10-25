import axios from 'axios'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

export default {
    name: 'gitclone',
    aliases: ['gitdl', 'clone'],
    type: 'download',
    desc: 'download repository github',
    example: 'no url?!\n\nExample: %prefix%command https://github.com/ZexxaBot/botv1',
    execute: async({m, hisoka}) => {
        m.reply('wait a sec..')
        try {
            
            let [, user, repo] = Func.isUrl(m.body)[0].match(regex) || []
	repo = repo.replace(/.git$/, '')
            let xvdx = await axios.get(`https://api.github.com/repos/${user}/${repo}/zipball`)
            if(xvdx.status ===200) { 
                return
            hisoka.sendMessage(m.from, `https://api.github.com/repos/${user}/${repo}/zipball`, { asDocument: true, fileName: `${repo}`, mimeType: 'auto', caption: `*nih bang repo ${user}*`, quoted: m})
                }else{
                    m.reply('request failed')
                    }
            } catch(error) {
                console.error(error)
                m.reply(error)
                }
        }
    }

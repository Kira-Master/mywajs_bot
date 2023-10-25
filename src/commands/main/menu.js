import os from 'os'
import path from 'path'
import v8 from 'v8'

function toUpper(query) {
    const arr = query.split(" ")
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join(" ")
    //return query.replace(/^\w/, c => c.toUpperCase())
}


export default {
    name: "menu",
    aliases: ["menu","help","list","p","bot","halo","test"],
    type: 'main',
    desc: "To display the menu by list, and see how to use the menu",
    execute: async({ hisoka, m, prefix, command, commands }) => {
        if (m.args.length >= 1) {
            let data = []
            const nama = m.text.toLowerCase()
            const cmd = commands.get(nama) || commands.find((cmd) => cmd.default.aliases && cmd.default.aliases.includes(nama))
            if (!cmd) return m.reply("Command Not Found")
            if (cmd.default?.isOwner && !m.isOwner) return m.reply("quoted")
            if (cmd.default?.name) data.push(`*- Command :* ${cmd.default.name}`)
            if (cmd.default?.aliases) data.push(`*- Alias :* ${cmd.default.aliases.join(", ")}`)
            if (cmd.default?.desc) data.push(`*- Desc :* ${cmd.default.desc.replace(/%prefix/g, prefix).replace(/%command/g, cmd.default.name)}`)
            if (cmd.default?.example) data.push(`*- Exm :* ${cmd.default.example.replace(/%prefix/g, prefix).replace(/%command/g, command)}`)
            if (cmd.default?.isLimit) data.push(`*- Use Limit :* Command uses limit to work`)
            if (cmd.default?.limit) data.push(`*- Amount of Limit :* ${cmd.default.limit}`)
            if (cmd.default?.isPremium) data.push(`*Fiture Only User Premium*`)
            if (cmd.default?.isVIP) data.push(`*Fiture Only User VIP*`)

            m.reply(`*Command Info :*\n\n${data.join("\n")}`)
        } else {
            let pepek = global.db.users[m.sender]
            let dick = "6282135278036"
            let teks = `Hai @${m.sender.split("@")[0]}, Ini Adalah Daftar Perintah Yang Tersedia\n*_Owner_*: @${dick}\n*_Your Limit:_* ${pepek.limit}\n*_Premium:_* ${pepek.premium}\n*_Website_*: https://zexxa.tech\n*_Runtime Bot_*
${Func.runtime(os.uptime())}\n\n`

            const tag = Array.from(commands.values())
            const list = {}

            tag.forEach((a) => {
                if (!a.default?.type) return
                if (!(a.default.type in list)) list[a.default.type] = []
                list[a.default.type].push(a)
            })

            Object.entries(list).map(([type, command]) => {
                teks += `┌──⭓ *${toUpper(type)} Menu*\n`
                teks += `│\n`
                teks += `│⎚ ${command.map((a) => `${(a.default.noPrefix ? `${a.default.name}` : `${prefix + a.default.name}`)} ${(a.default.isLimit ? "(" + (a?.default.limit || 1 + " Limit") + ")" : "")} ${(a.default.isPremium ? " *(" + ("Premium") +")*" : "")}`).join('\n│⎚ ')}\n`
                teks += `│\n`
                teks += `└───────⭓\n\n`
            }).join('\n\n')

            hisoka.sendMessage(m.from, 'https://w0.peakpx.com/wallpaper/670/410/HD-wallpaper-light-yagami-art-facial-expression-anime-deathnote-anime-deathnote-deathnote-l-kira.jpg', {
                caption: teks,
                quoted: m,
                mentions: hisoka.parseMention(teks),
                extra: {
                    ctwaContext: {
                        title: hisoka.info.pushname,
                        sourceUrl: 'https://instagram.com/paujikerenbanget',
                        thumbnail: (await Func.getFile('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoDAYQRcODhcH4vuJljhhuG8IUCryqEar9g&usqp=CAU')).data.toString('base64'),
                        mediaType: 1
                    }
                }
            })
        }
    },
    isBanned: false,
    noPrefix: true
}

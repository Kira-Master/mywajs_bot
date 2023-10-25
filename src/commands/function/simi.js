export default async function ({ m }) {
    if (!m.isGroup && global.db.users[m.from]?.simi && !m.fromMe) {
        let text = await (new api('zxb')).get('/simi/simi', { query: m.text })
        if (text.status !== 200) return m.reply('Sorry, I do not understand')
        m.reply(text.data.respon)
    }
}

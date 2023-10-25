export default {
    name: 'setname',
    type: 'owner',
    desc: 'change name bot',
    example: 'Ghost?\n\nExample : %prefix%command Hisoka Morrou',
    execute: async({ m, hisoka}) => {
        let text = m.hasQuotedMsg && !m.text ? m.quoted.body : m.text
        await hisoka.changeMyname(text).then(() => { return m.reply('done bang')})
    },
    isOwner: true
}
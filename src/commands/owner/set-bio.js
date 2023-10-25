export default {

    name: 'setbio',

    type: 'owner',

    desc: 'change bio bot',

    example: 'Ghost?\n\nExample : %prefix%command Hisoka Morrou',

    execute: async({ m, hisoka}) => {

        let text = m.hasQuotedMsg && !m.text ? m.quoted.body : m.text

        await hisoka.setStatus(text).then(() => { return m.reply('done bang')})

    },

    isOwner: true

}
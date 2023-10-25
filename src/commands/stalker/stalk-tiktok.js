import axios from 'axios'
export default {
    name: 'stalktt',
    aliases: ['tiktokstalk', 'ttstalk'],
    type: 'stalker',
    desc: 'stalk tiktok account',
    example: 'no username?!\n\nExample: %prefix%command paujyyygantengbanget',
    execute: async ({ m, hisoka }) => {
        let query = m.text
        let data = await axios.get(`https://api-fxc7.cloud.okteto.net/api/stalk/tiktok?username=${query}&apikey=4mGSsdtdpoXC9E8`)
        let vid = await axios.get(`https://api.akuari.my.id/downloader/tiktok?link=${data.data.result.list_content[0]}`)
        //console.log(vid)
        let msgX = `*Region*: ${data.data.result.region}\n*Username*: ${data.data.result.username}\n*Fullname*: ${data.data.result.nickname}\n*Followers*: ${data.data.result.followers}\n*Followings*: ${data.data.result.followings}\n*Likes Total*: ${data.data.result.love_count}\n*Diggs Total*: ${data.data.result.digg_count}\n*Total Videos*: ${data.data.result.video_count}\n*Bio*: ${data.data.result.description}\n`
        hisoka.sendMessage(m.from, vid.data.respon.media, { caption: msgX, quoted: m })
        }
    }
/*import axios from 'axios';

export default {
  name: 'play2',
  aliases: ['ytp2', 'playmp32'],
  type: 'download',
  desc: 'play music server 2',
  example: '%prefix%command crank that',
  execute: async ({ m, hisoka }) => {
      m.reply("wait")
    try {
      let q = m.text;
      let { data } = await axios.get(`https://api.zahwazein.xyz/downloader/ytplay?apikey=zenzkey_8bc01f5847&query=${q}`);
        if ( data.status !== 'OK' ) {
            return m.reply('error')
            } else {
                hisoka.sendMessage(m.from, data.result.getAudio.url, { asDocument: true, mimeType: 'audio/m4a', fileName: data.result.title, caption: 'berhasil', quoted: m })
                }
      // tambahkan kode lain yang ingin dijalankan di sini
    } catch (error) {
      console.error(error);
      // tambahkan penanganan kesalahan di sini
    }
  }
};*/
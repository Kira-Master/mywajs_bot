import { Google, Musixmatch } from '@flytri/lyrics-finder';
import lyrics from '@fantox01/lyrics-scraper'
export default {
  name: 'lyrics',
  type: 'search',
  desc: 'search lyrics',
  example: '%prefix%command before you go',
  execute: async ({ m, hisoka }) => {
    try {
        let data = await lyrics(m.text)
        //console.log(data)
        hisoka.sendMessage(m.from, data.thumbnail, { caption: data.lyrics, quoted: m })
          } catch (error) {
      m.reply("error");
              let data = await Musixmatch(m.text);
      //console.log(data);
        m.reply(data.lyrics)
        
        
    }
  }
}
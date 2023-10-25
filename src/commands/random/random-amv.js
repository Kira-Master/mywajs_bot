import cheerio from 'cheerio';
import fetch from 'node-fetch';

export default {
    name: 'randomvid',
    type: 'random',
    desc: 'random video',
    example: '%prefix%command 1',
    execute: async({m, hisoka}) => {
        let q = m.text
        if(q === '1') {
            try {
                m.reply('wait...')
                let video = await animeVideo()
                //console.log(video)
                hisoka.sendMessage(m.from, video.source, { caption: '*nih*', quoted: m})
                }catch(error){
                    m.reply('failed')
                    }
            }
        if(q === '2') {
            try {
                m.reply('wait...')
                let vid = await animeVideo2()
                //console.log(vid)
                hisoka.sendMessage(m.from, vid.source, { caption: '*random video server 2*', quoted: m })
                }catch(error){
                    m.reply('gagal')
                    }
            }
        }
    }
                                   
                





async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}
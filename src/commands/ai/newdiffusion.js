import AI from 'stable-diffusion-es';
import fs from 'fs';
import midjourney from "midjourney-client"
export default {
    name: 'stablediffusion',
    type: 'ai',
    desc: 'stable diffusion',
    example: '%prefix%command masterpiece, best quality, 1girl, solo, long hair, skirt, outdoors, cloud, black hair, blue eyes, shirt, long sleeves, shoes, sky, tree, black skirt, full body, blue sky, bangs, blush, blue shirt, sneakers, standing, grass, white footwear, cloudy sky, day, print shirt, looking at viewer, walking, from side, <lora:add_detail:1>',
    execute: async({m, hisoka}) => {
        let prompt = m.text
        


 AI.generate(prompt, async (result) => {
    if (result.error) {
        console.log(result.error)
        return;
    }
     //console.log(result)
    try {
        for (let i = 0; i < result.results.length; i++) {
            let data = result.results[i].split(",")[1]
            const buffer = Buffer.from(data, "base64")
            
            hisoka.sendMessage(m.from, buffer, {caption: prompt})
        }
     
    } catch (e) {
        console.log(e)
    }
})
}
}
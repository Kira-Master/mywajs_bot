import JavaScriptObfuscator from "javascript-obfuscator"

export default {
    name: 'obfuscator',
    type: 'tool',
    desc: 'obsucate your javascript code',
    //example: '%prefix%command high',
    execute: async({m}) => {
        try {
            let q = m.text
            
            if (!q) {
                m.reply('mana yang mau di obfuscate?')
                }else{
                    let res = await Encrypt(q)
                m.reply(res)
                    }
            }catch(error){
                m.reply(error)
                }
        }
    }
             
            
            
            
async function Encrypt(query) {

    const obfuscationResult = JavaScriptObfuscator.obfuscate(query, {

        compact: true,

        controlFlowFlattening: true,

        controlFlowFlatteningThreshold: 1,

        numbersToExpressions: true,

        simplify: true,

        stringArrayShuffle: true,

        splitStrings: true,

        stringArrayThreshold: 1,

        sourceMap: false,

        sourceMapMode: "separate",

    })

    return obfuscationResult.getObfuscatedCode()

}

async function Decrypt(encryptedCode) {

    const decryptedCode = JavaScriptObfuscator.obfuscate(encryptedCode, {

        compact: false,

        controlFlowFlattening: true,

    }).getObfuscatedCode()

    return decryptedCode

}
    
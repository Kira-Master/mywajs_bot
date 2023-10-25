import JavaScriptObfuscator from "javascript-obfuscator"
export default {
    name: 'deobfuscator',
    type: 'tool',
    desc: 'deobfuscate code',
    execute: async({m}) => {
        try {
            let data = await Decrypt(m.text)
            if (!m.text) {
                m.reply('where encrypted code?')
                }else{
                    m.reply(data)
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
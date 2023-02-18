import QRCode from 'qrcode'
import dataUrlCache from './cache.js'

const generateQR = async text => {
  try {
    const code = await QRCode.toDataURL(text)
    dataUrlCache.add(text, code)
    return code
  } catch (err) {
    console.error(err)
  }
}

export default async function getCode(input) {
  const cached = dataUrlCache.get(input)
  if (cached) {
    console.log(`Cached version for ${input}found`)
    return cached
  } else {
    console.log(`Making code for ${input}`)
    return generateQR(input)
  }
}

import express from 'express'
import getCode from './makeQr.js'
const port = process.env.PORT || 3000

export default function init() {
  const app = express()

  app.get('/:input', async (req, res) => {
    const input = req.params.input
    console.log(`Request received with param: "${input}"`)
    const code = await getCode(input)
    console.log(`Returning ${input} encoded as dataURL`)
    res.send(code)
  })

  app.listen(port, () => {
    console.log(
      `QR-MAKER listening on port ${port}: \n get codes from {host}:${port}/{YOUR TEXT HERE}`
    )
  })
}

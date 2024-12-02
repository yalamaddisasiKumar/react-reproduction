import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { Html } from './app'
import express from 'express'
import fs from 'fs'

const app = express()

app.get('/', (_req, res) => {
  const { pipe } = renderToPipeableStream(<Html />, {
    bootstrapScripts: [ '/client.js' ],
    onShellReady() {
      res.setHeader('content-type', 'text/html')
      pipe(res)
    }
  })
})

app.get('/client.js', (_req, res) => {
  res.setHeader('content-type', 'text/javascript')
  fs.createReadStream('./dist/client.js').pipe(res)
})

app.listen(3123, () => {
  console.log('listening on port http://localhost:3123')
})

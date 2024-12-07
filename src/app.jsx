import React from 'react'
import { useId, useState } from 'react'

function App() {
  const _id = useId() // If commented out, no warning.

  const [prevValue, setPrevValue] = useState(false)
  useEffect(() => {
    if (prevValue === false) setPrevValue(true)
  }, [prevValue])


  return <Inner />
}

// If this component's body is copied into `App`, no warning.
function Inner() {
  const id = useId() // <---- NOT STABLE!

  return <div id={id} />
}

// --- Page structure

export function Html() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Test</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  )
}

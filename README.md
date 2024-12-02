# React Reproduction

## Relevant code

```jsx
function App() {
  const _id = useId() // If commented out, no warning.

  const [prevValue, setPrevValue] = useState(false)
  if (prevValue === false) setPrevValue(true) // If commented out, no warning.

  return <Inner />
}

// If this component's body is copied into `App`, no warning.
function Inner() {
  const id = useId() // <---- NOT STABLE!

  return <div id={id} />
}
```

## Steps to reproduce

```
git clone https://github.com/kognise/react-reproduction.git
cd react-reproduction
yarn
./repro.sh
```

Open <http://localhost:3123/>.

Observe:

```
client.js:2427 Warning: Prop `id` did not match. Server: ":R6:" Client: ":R2:" Error Component Stack
    at div (<anonymous>)
    at Inner (client.js:23592:40)
    at App (client.js:23596:41)
    at body (<anonymous>)
    at html (<anonymous>)
    at Html (<anonymous>)
```

import { FC, useCallback, useMemo, useState } from 'react'
import './App.css'
import { MemoizedCard } from './components'

const App: FC = () => {
  const [count, setCount] = useState(0)
  const memoizedList = useMemo(() => (
    [
      'Props change: Since we memoized a non-primitive function `onMount` using `useCallback` and `list` using `useMemo`, it won\'t.',
      'State changes: Card itself does not have state, it won\'t',
      'Parents re-render: Parent re-renders on counter click (state changes) but not for Card since we momoized it using `React.memo`, it won\'t.'
    ]
  ), [])
  const memoizedOnMount = useCallback(() => { console.log('Hello from outside') }, [])

  return (
    <div className="App">
      <button onClick={() => { setCount((count) => count + 1) }}>
        Counter on App level {count}
      </button>
      <MemoizedCard
        heading="This is a heading"
        onMount={memoizedOnMount}
        list={memoizedList}
      />
    </div>
  )
}

export default App

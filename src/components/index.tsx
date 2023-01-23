import React, { FC, useEffect, useMemo } from 'react'

export interface CardProps {
  heading: string
  /**
   * This is a non-primitive value!
   * @returns void
   */
  onMount: () => void
  list: string[]
}

const Card: FC<CardProps> = ({ heading, onMount, list }) => {
  const memoizedList = useMemo(() => {
    /**
     * Instead of memoizing the array operation, we should
     * memoize the actual most expensive calculation here -
     * re-rendering and updating components.
     */
    return list.map((item) => (
      <li key={item}>{item}</li>
    ))
  }, [list])

  useEffect(() => {
    onMount()
  })

  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>
        Re-rendering happens if:
        <ul>
          {memoizedList}
        </ul>
        Okay, so Card won&apos;t re-render because we follow this rule:<br />
        <strong>
          <cite>Only when every single prop and the component itself are memoized, then re-renders can be prevented.</cite>
        </strong>
      </p>
    </div>
  )
}

export const MemoizedCard = React.memo(Card)

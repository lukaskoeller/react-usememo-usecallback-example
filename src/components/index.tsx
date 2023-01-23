import React, { FC, useEffect } from 'react'

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
  useEffect(() => {
    onMount()
  })

  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>
        Re-rendering happens if:
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        Okay, so Card won&apos;t because we follow:<br />
        <strong>
          <cite>Only when every single prop and the component itself are memoized, then re-renders can be prevented.</cite>
        </strong>
      </p>
    </div>
  )
}

export const MemoizedCard = React.memo(Card)

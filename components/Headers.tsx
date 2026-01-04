import React from 'react'

interface Props {
  title: string,
  description: string
}

const Headers = ({title, description}: Props) => {
  return (
    <header className='header'>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>

    </header>
  )
}

export default Headers

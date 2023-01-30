import React from 'react'

export default function NewsItem({item}) {
    
    
  return (
  <li>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <a rel="noopener noreferrer" target="_blanc" href={item.url}>Read more</a>
    <p>{item.date}</p>
  </li>
  )
}

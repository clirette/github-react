import React from 'react'

const hide = e => {
  e.target.style.display = 'none';
}

const Results = props => {
  const options = props.items.map((item, i) => (
    <li key={i} onClick={hide}>
      {item.login}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Results;
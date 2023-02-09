import React from 'react'
import styles from './Icon.module.css'

const Icon = ({logo, title, description}) => {

  return (
    <div>
      <img src={logo} />
      <h3 className=''>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Icon;

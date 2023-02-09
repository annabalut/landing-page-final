import React from 'react'
import Icon from './Icon'
// import {images} from '../constans'
import access from '../../images/icon-access-anywhere.svg'
import security from '../../images/icon-security.svg'
import collaboration from '../../images/icon-collaboration.svg'
import place from '../../images/icon-any-file.svg'
import styles from './IconSection.module.css'

const IconSection = () => {
  return (
    <div>
      <div className={styles.line}>
        <Icon logo={access} title='Lorem ipsum' description='Lorem ipsum lorem ipsum lorem ipsum' />
        <Icon logo={security} title='Lorem ipsum' description='Lorem ipsum lorem ipsum lorem ipsum' />
      </div>
      <div className={styles.line}>
        <Icon logo={collaboration} title='Lorem ipsum' description='Lorem ipsum lorem ipsum lorem ipsum' />
        <Icon logo={place} title='Lorem ipsum' description='Lorem ipsum lorem ipsum lorem ipsum' />
      </div>
    </div>
  )
}

export default IconSection

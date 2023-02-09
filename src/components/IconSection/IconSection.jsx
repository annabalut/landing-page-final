import React from 'react'
import Icon from './Icon'
import access from '../../images/icon-access-anywhere.svg'
import security from '../../images/icon-security.svg'
import collaboration from '../../images/icon-collaboration.svg'
import styles from './IconSection.module.css'

const IconSection = () => {
  return (
    <div>
      <div className={styles.line}>
        <div className={styles.space}>
          <Icon logo={access} />
          <h3 className='HeadingIcon'>Lorem ipsum</h3>
          <p className='BodyIcon'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore porro explicabo mollitia! Quam suscipit in qui ducimus dolore optio at magnam, pariatur rem eos architecto ipsum tenetur, neque incidunt praesentium?</p>
        </div>
        <div className={styles.space}>
          <Icon logo={security} />
          <h3 className='HeadingIcon'>Lorem ipsum</h3>
          <p className='BodyIcon'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore porro explicabo mollitia! Quam suscipit in qui ducimus dolore optio at magnam, pariatur rem eos architecto ipsum tenetur, neque incidunt praesentium?</p>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.space}>
          <Icon logo={collaboration} />
          <h3 className='HeadingIcon'>Lorem ipsum</h3>
          <p className='BodyIcon'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore porro explicabo mollitia! Quam suscipit in qui ducimus dolore optio at magnam, pariatur rem eos architecto ipsum tenetur, neque incidunt praesentium?</p>
        </div>
        <div className={styles.space}>
          <Icon logo={collaboration} />
          <h3 className={styles.headingIcon}>Lorem ipsum</h3>
          <p className='BodyIcon'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore porro explicabo mollitia! Quam suscipit in qui ducimus dolore optio at magnam, pariatur rem eos architecto ipsum tenetur, neque incidunt praesentium?</p>
        </div>
      </div>
    </div>
  )
}

export default IconSection

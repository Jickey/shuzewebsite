import React, { useEffect, useState } from 'react'
import styles from './swiper.less'
import classNames from 'classnames'

const count = 5
export default () => {
  const [index, setIndex] = useState(1)
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIndex(index >= count ? 1 : index + 1)
  //     }, 5000)
  //   }, [index])
  console.log(index)
  return (
    <>
      <div
        className={styles.Swiper}
        onClick={() => {
          setIndex(index >= count ? 1 : index + 1)
        }}
      >
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 1,
            [styles.Hide]: index === 2,
          })}
        >
          111
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 2,
            [styles.Hide]: index === 3,
          })}
        >
          222
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 3,
            [styles.Hide]: index === 4,
          })}
        >
          333
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 4,
            [styles.Hide]: index === 5,
          })}
        >
          444
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 5,
            [styles.Hide]: index === 1,
          })}
        >
          555
        </div>
      </div>
      <div className={styles.ProgressList}>
        <div className={styles.Line}>
          <div />
        </div>
        <div className={styles.Line}>
          <div />
        </div>
        <div className={styles.Line}>
          <div />
        </div>
        <div className={styles.Line}>
          <div />
        </div>
        <div className={styles.Line}>
          <div />
        </div>
      </div>
    </>
  )
}

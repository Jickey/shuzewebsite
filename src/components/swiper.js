import React, { useEffect, useState } from 'react'
import styles from './swiper.less'
import classNames from 'classnames'

const count = 5
export default () => {
  const [index, setIndex] = useState(1)
  useEffect(() => {
    setTimeout(() => {
      setIndex(index >= count ? 1 : index + 1)
    }, 5000)
  }, [index])
  return (
    <>
      <div
        className={styles.Swiper}
        // onClick={() => {
        //   setIndex(index >= count ? 1 : index + 1)
        // }}
      >
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 1,
            [styles.Hide]: index === 2,
          })}
        >
          <div className={styles.text}>
            <div className={styles.text1}>应用场景解决方案</div>
            <div className={styles.text2}>移动端+webX研发</div>
          </div>
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 2,
            [styles.Hide]: index === 3,
          })}
        >
          <div className={styles.text}>
            <div className={styles.text1}>基础级产品服务</div>
            <div className={styles.text2}>社交与电商平台研发与服务</div>
          </div>
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 3,
            [styles.Hide]: index === 4,
          })}
        >
          <div className={styles.text}>
            <div className={styles.text1}>互联网+X解决方案</div>
            <div className={styles.text2}>SaaS服务</div>
          </div>
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 4,
            [styles.Hide]: index === 5,
          })}
        >
          <div className={styles.text}>
            <div className={styles.text1}>AIOT解决方案</div>
            <div className={styles.text2}>PaaS服务</div>
          </div>
        </div>
        <div
          className={classNames({
            [styles.Item]: true,
            [styles.Show]: index === 5,
            [styles.Hide]: index === 1,
          })}
        >
          <div className={styles.text}>
            <div className={styles.text1}>数字化变革解决方案</div>
          </div>
        </div>
      </div>
      <div className={styles.ProgressList}>
        <div className={styles.Line}>
          <div className={index === 1 && styles.progressActive} />
        </div>
        <div className={styles.Line}>
          <div className={index === 2 && styles.progressActive} />
        </div>
        <div className={styles.Line}>
          <div className={index === 3 && styles.progressActive} />
        </div>
        <div className={styles.Line}>
          <div className={index === 4 && styles.progressActive} />
        </div>
        <div className={styles.Line}>
          <div className={index === 5 && styles.progressActive} />
        </div>
      </div>
    </>
  )
}

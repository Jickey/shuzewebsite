import { useState } from 'react'
import styles from './index.less'
import classnames from 'classnames'
import Swiper from '../components/swiper'

const titleList = ['公司介绍', '技术优势', '产品创新', '企业愿景', '商业模式']
const descList = [
  {
    index: 0,
    title: '公司介绍',
    desc: '成都庶泽科技有限公司，简称“庶泽科技”，作为数字化、智能化服务科技公司，以数字创新技术为核心驱动力，聚集国内产业链相关硬件、软件、系统集成，打造围绕客户一体化服务生态，提供从咨询、规划、集成、运营运维等端到端的一站式行业解决方案服务商，业务涵盖场景化方案咨询与集成、平台研发、平台服务等。',
  },
  {
    index: 1,
    title: '技术优势',
    desc: '庶泽团队成员拥有深厚的技术积累，采用“尖兵”作战的方式，投入于原创技术研究，不断增强行业全栈式开发与服务能力，使用行业领先技术，涵盖大数据、人工智能、物联网、区块链等关键技术领域，同时包含AIOT平台、电子商务平台基础设施在内的关键能力，为客户带来显著投资回报。',
  },
  {
    index: 2,
    title: '产品创新',
    desc: '庶泽科技提供基于AI、大数据、边缘计算的面向数字化转型的行业应用软件和平台服务，打造前瞻性新型庶泽AIOT平台，打通场景化应用、数据底座和使能平台，大幅降低客户数字化转型生产要素价格，实现高效率、低成本、规模化的数字化创新和落地，进而打通商业价值闭环。',
  },
  {
    index: 3,
    title: '企业愿景',
    desc: '①使命：让科技服务时代；②愿景：让你我在数字化世界都有更精彩的瞬间；③核心价值观：为人类服务',
  },
  {
    index: 4,
    title: '商业模式',
    desc: '与客户、合作伙伴共筑市场化的产品与服务',
  },
]

const leftArr = [74, 325, 573, 882, 1070]
const colorArr = ['#08b2d6', '#0ab7c8', '0dbdb0', '10c499', '12cb80']

export default function IndexPage() {
  const [tab, setTab] = useState(0)

  return (
    <div className={styles.Box}>
      <div className={styles.Container}>
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="52"
            height="71"
            viewBox="0 0 52 71"
          >
            <image
              id="logo"
              width="52"
              height="71"
              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABHCAYAAABIzmSEAAAM9UlEQVRogc1ba6hmVRl+nrX3OTPjqKhIXispBf8kpIH6I/tRRhFJkubQTTDQwogEhQQjC8sGMqGiQaWSEHWCDCoiKeliYPajIKeLmlZaipeE8TKXM7PXG2u977vW+r595nPOOd9R18xmf9/+9l57veu9Pe/lcPPdv8Q8h6AHpIdIOncQYf6ePkMCBGEjJHwY5KcQw9sEzP/SffmMdH86B8A+E+k56Pdybxqh3A/7vZ8rNbNHetclgHwejCemxYCxEAMyL5CS1peuRiWMASIRZLrPlk0nTvJ/UnQDRF4xgt4Kyi1APEMJSLsfKxHIa4Hka2lhg57zsu0+oRERlBAEm1qUS3ZfGL16viO96Qoi3g8MZySO6JZGXUA+hnxmupbYkz+LUgi73z9TjKsoz6d785GJXF8ObSTi94CwpYqW7iiZdQku+ZkzEowbKjpwsRK/xkKomLRVjhkD11HkDiPiT0C8Q7+auEhRANtRVepMbFIjoa1TRUi/K6FC1nkyZ4JtUMzXsrAR60LQIUC8G5Szk66Qg1s3MJii5zUbgZmSYJygiVewBaooqcKb7tB1ruqgimVcFyvXEfEOIc6uItJBss6gUWwod5Ioip3RGIjMHaiyJ4uXxSyamMGIUmNQ71O6eva7Rqta1Ui+J/Zfh8h5VajSLg950UqPm+ZYLJUEMT9TfYnuejSuRCOK9ryoFXQdZCOacxa5D5HxM+oQh2a3q+orN5wAJUyKboUiNrpQNua56k+d0wnWnzhnkTsRiLeojMM8vhQi4I4PaHTIFxtUxFxXzGhkNFCcqeoZzVfpdXXMVYyVg302lWsf3xTK4e7pfaEoc/vuq8nWbWZxiZhYYDAr1lyDGYtMlHMlmin3+3TaeXHo/NGVdR5ElMJ1JxrhFcVy8xlhj/JBqo7SAW1yrN3G/676PcOeE0bX1o2Obm8+x9il08cc6rS4bs1WrtvwZJ5s2HvM6Ld5jRD2Tc90KjFsy1YxW4nqlGVeIhcWn1FTLI6kzZeIWTFRZZaCtOv3NIal5TckhP3TlzYRcTsYNmeDExvUbjHSa0KHusWn8nn/3uP1e//8xO+SA8YOiP2NCOG0xJGC/7L+uH/DuocPKxr9hifQ9S8c6JGLwHgZMeRQI/s5augh+bz+4cM8x5vJeDOmkAfEo16HSmvj0OONmVnL8XJjEYw/AOLhgqEga3qgmEUt6ucQE1IYXma+A44/JMgjBkPFUQAUYWdRsCczzEkvjoYSqrm9dXpydipynmQB+q9B5HRF2NUIJJ9TQK/HVFnkuGro87DAF+f4K33usmyLv8Kv5YUY8QpVdhC4vJ1QhsXpd3wAGD5Ndhb/YCJe8rCEDlwlrImg/7CQ00aTaZ86x8yGhGFEKDEEXgRxoUgoscsyxLwRjN8FAkvSxCPefBZDC1JTXtmxrp6g51kSGM7wzsTOotRMjNTIW+h0XwYJfx/NWMcCwnAnJRxZlV8Mwbvas4E+yEQlLvbEyHkd7Nij4iVT1l8Kp2gI2a+LJkBugoTb23cw7M6HRE1SAv11lHCWkuB6FywCjkUqdMMMnVt4vhYO9apDHudIIw2syUzUnCBF/iQInwX3Ih1qH0ai9l5BvMqzPiybZDpKlgSLv1c3TZMpa4mHDivJS1bZzlEoO8sDGKFq1XaC4QKRDJdtMSNijkeI32cUaqykCCBLQtGjYI7VxNmTJrZzYeNRv1WPu/Lj9f4M6cnCQc1zPicxKHMKOFwC4NHRttTRMQx3APFopDwDzbc4ItD5ngTjSRMx+dSRkcLGI+7Dnp1njt7wMuNkFmujXIiWqGiV2HzFNwThrna60O0GsLsk9iX21wLhHHjOLicjaxivnArXQbp/z1oWT3j43SVvtvTCaaMbDjRE+ocg3Ske0ws6g/JeOQiGhsP9ttClImmxETUl6J0i4W5I6Bylq/XqLKeQr+0S6TeLLIApNQZ7l4SSdFlLkuQEIp6SdzCtQSw/ZhaPBhEk4DmKXCQSlidGxzFAvC2LHMX8GCYzrdnIxHvAJdD3Zf8Ro0VhGm0vHrqjSaLPPN6fZTpExVGGpeh6E1RviOFiALNEJAjjbWA8lmEwbBarXuaz6SRw3ujpZcaIQ4uH/g37dr9pfGc7Yn8xKoSpWZnMMU83YSsQfto+VvxNLn4tJL25mpB3uY9iMc2GAnzaVCbhFOZcfArD3mNHSxsRdBDjDeBwlheaHFvBxEWrA3IvIddovKL+RuKG6ZnfjhC/yOKHpYpsuwn5p/DicstKKYD9U3mNZQla2PivjFvjviMnridPLtJ/IWf+c/LSEurUxCCUpKcBbIGEoT43IuZoMN5OBX1Nzs3QkesgxDfqgdEinYBNj2HYfVL5vtJ46Dgmf5JkG0PxOyif40DGjwJ4YvRkHSTjrbksmTnY6o76MrFDQ5usow/M0uluU3Vvy3LoAIPk8CM1z7Fuo8MQTY58GQi/mFh9tzsfyTzHuJDOVwLhfSqyra9pU1LKmYz9cvhzYA75WDjkQezbdepsgkK/05ITC0nUtoLhTFX4CteL8gL3UORL4P5SthEZidpZ5HBdDs7cIXvhqkTWFigW05+IxZ9Hi1tmLG7+62yCmnElGK+ClRRbhK0BG54g5SMifdWbMTFHBg53CMJixV5OgIeKUuMeGAZUS/rIaEUHGAdD0NXg8BU2Ds+jaItPBjIZgf6p0ZN1EIjfAaRqL6RUIMo++WerVhgG2SUSDjq9O4ugQwHcAMRL3R/Q/IwTYwu4BhLunVh92AdCM54Jqoj0lxNyvtBRRNWVQoxjv1KZE3Nv/EcON1ZAUJt5eQnAzxOwoAznCuUozXB6dGDglqWg9TNAthZ/k1H+IdPvOB2IN1Rqm8qim/rCkQpovaQaQvjnaNUzRgnwDItthoQPwuIblujXOzZo3Mkvf0yAjwPdrFTU4UDcTspiQeWOBLLJDTXTJlUvSx4ic0hmQafR6D0bM9GdUby/e2qWMNj2dwngFkj3v3ZCJgvXP58tYxI1xP4mEicrMvaqnVieoVYMFEZ1Roj3vzjyCI+PVj1j9Dn6s7IfURUSTmOTb5OSQpLPCRbumyZmalyKELdAWovM8qVCQM3jJXAq0li5UqmTFRHEEx85R0rFOtKsTrC4ulYQUCsHd4mECyZ0b0pvRLq3AN39EG7KZX143ELr0LJaqoRSjUBzlubdIj1Hq54x+qzQaYdSpjOEmmY1MfGsvhZx5VGR1FEVZunN5pS6pXCTsPYkBEPn2nglBftVLCcVsXsfQmbo0ugFs0Zf6vxkSTt5t1QpV+ii9kJ4IdDtnJgvAc9JaP9tSDgV1nSRwaslM4qyl0xe+07oPkVMZnVWOAK8S8M7n7xDKsQKDjPXhisA/PEgpr94ueTFGo6VcYhWW5FiwTSWL11Qyqk7Ebtt0w93C89aSfK40cSv1uhLjisvwBMcgxmHzPoHKXJpCqsn5TmWWk234amsE3Hpda8+QcUPlf4zdaAGbXZB5AKgKatxnxmMsTQE4xi8zurZm2wM2porS4YIpU1G+1OHNW5KXwtGmOxu0tTq5YJuR6YjJzzddK/f6BafznMPS6sT42K2NeHt0IDJ4vwGsb+VybglUVtnQqZHt/jk6NrBjMBi2aJFiYOnYK9FWJkPeC2MPjffWSEKaCJr4Feycqs5j7Gml1r1gRM5MO8odHRanSsLxK+dUVHrnU0qSzzSDJ6XrrgQ4lUF1B44LzeSvx+tcKUETbZ0eYLP6jtintzLGhmDOTyyOMbvN4IVVRurY1d64Txsd+JKE20LSMHrRytcMUFeHofXMGOxdrCez1rYsp4362L3qpoSVeGKc0hjqcYyenjgWI4olW0B7oT0Px6tcMUEla5AFzeWxtaSCLHmPbH+6ba6pqAVpcmvEm81HvtdJa5yg/YnABaHPUDIJzmd7l0VQRY5ZrRtYbBR19RLg+lMNCAZC8c4ocOsRQPvV3QCyoZMIWxyB0TeA+l3jla3GoK8I6M0s4KFqKq4XrasuqJJja7C5xYPtu2UjKY3jcjWUuKvJYX8wHOjla1yhNpeIla+iMUXeXmEbEsmfo/dX3TQfndRKyXOWFpXaIcwpt6wr4LDufMkBlXkLCliZRHdfdRSoBdqS/nE/qBCwkSXrndJER5TiSl8yQ+kWR8i8AlB+N1oNXMhyDMwBSjG0sqgne9V9ByR+32eb1BCB7NY3o+DUiK31O5OBFwvwhsh6wdBepVpX3Rt2fd2LSkN4rUNWdwyeik/WHhdkviWUGQ2Ci9B4jYhtkLCs6MVzJsgtT41h1Ar/mwsHYwjLXJgk8UxnvofLikrn4Fwm0C+RfTPjN68XgSBnuiLanmkZrEd2NX2LTPRxh3CE48ljkr8uleAmwn8UNDtGb1x/QmKZVeZujUCS4DmxLEyyvyVp4Rdl/gXANsJbhd0D43e8gqO11TP6ZoHgP8D/pIeRXfj7rQAAAAASUVORK5CYII="
            />
          </svg>
          <div className={styles.HeaderBox}>
            <div className={styles.Header}>庶泽科技</div>
            <div className={styles.CompanyName}>Chengdu Shuze Technology</div>
          </div>
        </header>
        <div className={styles.BigTitle}>SHUZE</div>
        <div className={styles.CompDesc}>
          成都庶泽科技有限公司为企业与私人客户提供可靠的商用软件开发服务。我们将为阁下提供软件、移动Apps、网站、WEB应用等产品的原型设计、交互设计、系统开发到后期运维整体系统解决方案
        </div>

        <Swiper />

        <div className={styles.TitleList}>
          {titleList.map((title, index) => (
            <div
              key={title}
              className={classnames(
                styles.Item,
                titleList[tab] === title && styles.Active,
              )}
              onClick={() => setTab(index)}
            >
              {title}
            </div>
          ))}
        </div>

        <div className={styles.descList}>
          <div
            className={styles.triangle}
            style={{
              left: leftArr[tab] + 'px',
            }}
          >
            <svg
              className={styles.Svg}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="50,0 100,100 0,100"
                style={{
                  fill: colorArr[tab],
                  strokeWidth: 1,
                }}
              />
            </svg>
          </div>
          {descList.map(({ title, desc }, index) => (
            <div
              key={index}
              className={classnames(
                styles.Item,
                titleList[tab] === title && styles.Active,
              )}
            >
              {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

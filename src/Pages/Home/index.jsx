import * as S from './style'

import Header from '../../Components/Header'
import MainBanner from '../../Components/MainBanner'
import Services from '../../Components/Services'
import Plans from '../../Components/Plans'
import Portfolio from '../../Components/Portfolio'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

const HomePage = () => {
  return (
    <S.Home>
      <Header />
      <MainBanner />
      <Services />
      <Plans />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </S.Home>
  )
}

export default HomePage
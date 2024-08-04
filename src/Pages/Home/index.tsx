import Banner from '../../assets/components/Banner'
import ProductsList from '../../assets/components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGame, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGame, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGame}
        title="Promoções"
        background="gray"
        id="on-Sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGame}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
export default Home

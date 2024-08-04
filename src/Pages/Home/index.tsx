import Banner from '../../assets/components/Banner'
import ProductsList from '../../assets/components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: string // Change id property to string
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

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

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
  const { data: onSaleGame } = useGetOnSaleQuery()
  const { data: soonGame } = useGetSoonQuery()

  if (onSaleGame && soonGame) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGame} title="Promoções" background="gray" />
        <ProductsList games={soonGame} title="Em breve" background="black" />
      </>
    )
  }
  return <h4>Carregando</h4>
}
export default Home

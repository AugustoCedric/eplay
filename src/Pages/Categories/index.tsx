import ProductsList from '../../assets/components/ProductsList'

import { Game } from '../Home'

const promocoes: Game[] = []
const emBreve: Game[] = []

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)
export default Categories

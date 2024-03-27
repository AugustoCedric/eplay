import Game from '../../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((games) => (
          <Product
            key={games.id}
            category={games.category}
            description={games.description}
            image={games.image}
            infos={games.infos}
            system={games.system}
            title={games.title}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default ProductsList

import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['R$ 150', '-10%']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['R$ 150', '-10%']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['R$ 150', '-10%']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['R$ 150', '-10%']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)
export default ProductsList

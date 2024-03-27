import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nulla,
      vero deleniti possimus sunt perferendis minima dolorum dolore! Laborum
      aliquid illum mollitia neque fugiat? Reiciendis doloribus sequi ad
      repellendus maiores.
    </Descricao>
  </Card>
)
export default Product

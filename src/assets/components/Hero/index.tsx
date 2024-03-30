import bannerImage from '../../images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PSG</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00 </span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero

import spiderman from '../../images/banner-homem-aranha.png'
import fechar from '../../images/fechar.png'
import hogwarts from '../../images/fundo_hogwarts.png'
import play from '../../images/play.png'
import zoom from '../../images/zoom.png'

import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type GallaryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GallaryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/q4GdJVvdxss?si=1s6Q2wKzoGZC_rgp'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GallaryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GallaryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="icone fechar" />
          </header>
          <img src={spiderman} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery

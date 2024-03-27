class Game {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.system = system
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Game

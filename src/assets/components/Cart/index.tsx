import Button from '../Button'

import { close, remove } from '../../../store/recucers/cart'

import { useDispatch, useSelector } from 'react-redux'
import Tag from '../Tag'

import { RootReducer } from '../../../store'
import { parseToBrl } from '../../../utils'
import * as S from './stayles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  // Criar uma função para somar o totalizar
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: string) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())} <br />
          <span>Em até 6x sem juros </span>
        </S.Prices>
        <Button title="Clique aqui para continuar com acrompra" type="button">
          Continuar com Acompra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

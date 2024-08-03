import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/recucers/cart'
import { parseToBrl } from '../../../utils'
import Button from '../Button'
import Tag from '../Tag'

import * as S from './stayles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      if (currentItem.prices.current) {
        return (accumulator += currentItem.prices.current)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: string) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
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
        <Button
          onClick={goToCheckout}
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a Compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

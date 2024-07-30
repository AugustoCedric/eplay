import { Link } from 'react-router-dom'

import carrinho from '../../images/carrinho.svg'
import logo from '../../images/logo.svg'
import {
  CartButton,
  Hamburguer,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobil
} from './styles'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { RootReducer } from '../../../store'
import { open } from '../../../store/recucers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a seção de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s) </span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobil className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              title="Clique aqui para acessar a seção de em breve"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobil>
    </HeaderBar>
  )
}

export default Header

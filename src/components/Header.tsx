import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

import css from "#styles/components/Header.module.scss"
import { Container } from './Container'
import { STORE_NAME } from '#common/constants'

export const Header = () => {
  return (
    <header className={css.Header}>
      <Container extraClasses={css.HeaderContent}>
        <h1>{STORE_NAME}</h1>
          <button className={`${css.Cart} snipcart-checkout`}>
            <FaShoppingCart className={css.CartIcon} />
            <span className="snipcart-total-price"></span>
            <span className={`${css.Count} snipcart-items-count`}></span>
          </button>
      </Container>
    </header>
  )
}

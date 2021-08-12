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
        <p className={css.Cart}>
          <FaShoppingCart className={css.CartIcon} /> $0.00
        </p>
      </Container>
    </header>
  )
}

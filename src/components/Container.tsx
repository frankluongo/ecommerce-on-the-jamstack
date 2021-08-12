import React from 'react'

import css from "#styles/components/Container.module.scss"

export const Container = ({ children, extraClasses }: { children: any, extraClasses?: string }) => {
  return (
    <section className={`${css.Container} ${extraClasses}`}>
      {children}
    </section>
  )
}

Container.defaultProps = {
  children: null,
  extraClasses: ''
}

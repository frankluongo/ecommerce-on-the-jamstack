import React from 'react'

import css from "#styles/components/Button.module.scss";

interface ButtonProps {
  children: any,
  extraClasses?: string,
  type?: string,
  size?: string
  width?: string
}

export const Button = ({ children, extraClasses, ...props }: ButtonProps) => {
  return (
    <button className={`${css.Button} ${extraClasses}`} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  extraClasses: '',
  type: 'filled-in', // filled-in, outline
  size: 'default', // default, large, small
  width: 'auto', // auto, full
}

import React, { FC, HTMLAttributes } from 'react'
import styles from './Badge.module.scss'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'light' | 'dark' | 'primary' | 'red' | 'green';
}

const Badge = ({
    variant= 'default',
    children,
    ...props
}: BadgeProps) => {

    const variantClass = {
        'default': styles.dark,
        'light': styles.light,
        'dark': styles.dark,
        'primary': styles.primary,
        'red': styles.red,
        'green': styles.green,
    }
    const buttonStyles = [styles.badge, variantClass[variant]].join(' ');
    const style = props.className ? `${props.className} ${buttonStyles}` : buttonStyles;

  return (
    <div {...props} className={style}>
        {children}
    </div>
  )
}

export default Badge
import React, { HTMLAttributes } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'light' | 'dark' | 'primary';
}

const Button = ({
    variant = 'default',
    children,
    ...props
}: ButtonProps) => {

    const variantClass = {
        'default': styles.dark,
        'light': styles.light,
        'dark': styles.dark,
        'primary': styles.primary,
    }
    const buttonStyles = [styles.button, variantClass[variant]].join(' ');
    const style = props.className ? `${props.className} ${buttonStyles}` : buttonStyles;

    return (
        <button className={style} {...props}>
            {children}
        </button>
    );
};

export default Button;

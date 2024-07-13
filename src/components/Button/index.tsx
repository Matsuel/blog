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
        'default': styles.default,
        'light': styles.light,
        'dark': styles.dark,
        'primary': styles.primary,
    }
    const buttonStyles = [styles.button, variantClass[variant]].join(' ');

    return (
        <button className={buttonStyles} {...props}>
            {children}
        </button>
    );
};

export default Button;

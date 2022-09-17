import * as React from 'react'
import cn from 'classnames'

import styles from './mobilemenu.module.css'

type Props = {
    mobileMenuOpen: boolean
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: Props) => (
    <button
        type="button"
        className={cn(styles['mobile-menu'], { [styles.open ?? '']: mobileMenuOpen })}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
        <div className={styles['line-one']} />
        <div className={styles['line-two']} />
    </button>
)

import * as React from 'react'
import cn from 'classnames'
import { BsChevronDown } from 'react-icons/bs'

import styles from './main.module.css'
import logo from './paste-logo.svg'

export const Main = () => (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <img width={36} height={36} src={logo} alt="Logo" />
                <span className={styles['brand-name']}>Paste</span>
            </div>
            <nav className={styles.navigation}>
                <ol>
                    <li>
                        <a href="#usecases">
                            Use cases <BsChevronDown />
                        </a>
                    </li>
                    <li>
                        <a href="#resources">
                            Resources <BsChevronDown />
                        </a>
                    </li>
                    <li>Updates</li>
                    <li>Pricing</li>
                </ol>
            </nav>
            <div className={styles['try-for-free']}>
                <a href="#try">Try for free</a>
            </div>
        </header>
        <section className={cn(styles.block, styles.light)} />
        <section className={cn(styles.block, styles.dark)} />
        <section className={cn(styles.block, styles.light)} />
        <section className={cn(styles.block, styles.dark)} />
    </div>
)

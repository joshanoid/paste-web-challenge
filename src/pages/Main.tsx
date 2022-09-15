import * as React from 'react'
import cn from 'classnames'

import styles from './main.module.css'
import logo from './paste-logo.svg'
import { LinkButton } from '../components/LinkButton'
import { Menu } from '../components/Menu'
import { resourcesSubmenus, useCasesSubmenus } from './constants'

export const Main = () => (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <a href="/#">
                    <img width={36} height={36} src={logo} alt="Logo" />
                    <span className={styles['brand-name']}>Paste</span>
                </a>
            </div>
            <nav className={styles.navigation}>
                <Menu title="Use cases" href="#usecases" submenus={useCasesSubmenus} />
                <Menu title="Resources" href="#resources" submenus={resourcesSubmenus} />
                <Menu title="Updates" href="#updates" />
                <Menu title="Pricing" href="#pricing" />
            </nav>
            <LinkButton title="Try for free" href="#try" />
        </header>
        <section className={cn(styles.block, styles.light)} />
        <section className={cn(styles.block, styles.dark)} />
        <section className={cn(styles.block, styles.light)} />
        <section className={cn(styles.block, styles.dark)} />
    </div>
)

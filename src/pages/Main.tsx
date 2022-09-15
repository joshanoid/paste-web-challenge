import * as React from 'react'
import cn from 'classnames'

import styles from './main.module.css'
import logo from './paste-logo.svg'
import { LinkButton } from '../components/LinkButton'
import { Menu } from '../components/Menu'
import { resourcesSubmenus, useCasesSubmenus } from './constants'
import { lightTheme, useTheme } from '../utils/theme'
import { Theme } from '../utils/types'

export const Main = () => {
    const [theme, setTheme] = React.useState<Theme>(lightTheme)

    // eslint-disable-next-line no-console
    console.log(setTheme)

    useTheme(theme)

    // React.useEffect(() => {
    //     const blocks = document.querySelectorAll(`.${CSS.escape(styles['content-block'])}`)

    //     const intersectionObserver = new IntersectionObserver((entries) => {
    //         // If intersectionRatio is 0, the target is out of view
    //         // and we do not need to do anything.
    //         // eslint-disable-next-line no-console
    //         console.log('entries', entries)

    //         if (entries[0].intersectionRatio <= 0) {
    //             return
    //         }

    //         // eslint-disable-next-line no-console
    //         console.log('Intersected')
    //     })

    //     intersectionObserver.observe(blocks)

    //     return () => {
    //         intersectionObserver.disconnect()
    //     }
    // }, [])

    return (
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
            <section className={cn(styles['content-block'], styles.light)} />
            <section className={cn(styles['content-block'], styles.dark)} />
            <section className={cn(styles['content-block'], styles.light)} />
            <section className={cn(styles['content-block'], styles.dark)} />
        </div>
    )
}

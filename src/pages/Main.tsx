import * as React from 'react'
import cn from 'classnames'

import styles from './main.module.css'
import logo from './paste-logo.svg'
import { LinkButton } from '../components/LinkButton'
import { Menu } from '../components/Menu'
import { resourcesSubmenus, useCasesSubmenus } from './constants'
import { darkTheme, lightTheme, useTheme } from '../utils/theme'
import { Theme } from '../utils/types'
import { getTargetSection } from './utils'

export const Main = () => {
    const [theme, setTheme] = React.useState<Theme>(lightTheme)

    useTheme(theme)

    React.useEffect(() => {
        const root = document.querySelector(`.${CSS.escape(styles.container)}`) as HTMLElement
        const options = {
            root,
            rootMargin: `${
                (document.querySelector<HTMLElement>(`.${CSS.escape(styles.header)}`)?.offsetHeight ?? 0) * -1
            }px`,
            threshold: 0,
        }
        let prevYPosition = 0
        let direction: 'up' | 'down' = 'up'

        const blocks = [...document.querySelectorAll<HTMLElement>(`.${CSS.escape(styles['content-block'])}`)]
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                direction = root.scrollTop > prevYPosition ? 'down' : 'up'
                prevYPosition = root.scrollTop

                const entryTarget = entry.target as HTMLElement
                const target = direction === 'down' ? getTargetSection(blocks, entryTarget) : entryTarget

                if ((direction === 'down' && !entry.isIntersecting) || (direction === 'up' && entry.isIntersecting)) {
                    setTheme(target.dataset.theme === 'light' ? lightTheme : darkTheme)
                }
            })
        }, options)

        blocks.forEach((block) => {
            intersectionObserver.observe(block)
        })

        return () => {
            intersectionObserver.disconnect()
        }
    }, [])

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
            <main>
                <section data-theme="light" className={cn(styles['content-block'], styles.light)} />
                <section data-theme="dark" className={cn(styles['content-block'], styles.dark)} />
                <section data-theme="light" className={cn(styles['content-block'], styles.light)} />
                <section data-theme="dark" className={cn(styles['content-block'], styles.dark)} />
            </main>
        </div>
    )
}

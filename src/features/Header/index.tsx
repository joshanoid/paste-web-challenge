import * as React from 'react'
import cn from 'classnames'

import { LinkButton } from 'components/LinkButton'
import { Menu } from 'components/Menu'
import { MobileMenu } from 'components/MobileMenu'
import { darkTheme, lightTheme, useTheme } from 'utils/theme'
import { Theme } from 'utils/types'

import styles from './styles.module.css'
import logo from './paste-logo.svg'
import { resourcesSubmenus, useCasesSubmenus } from './constants'
import { getTargetSection } from './utils'

type Props = {
    containerSelector: string
    sectionSelector: string
}

export const Header = ({ containerSelector, sectionSelector }: Props) => {
    const [theme, setTheme] = React.useState<Theme>(lightTheme)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    useTheme(theme)

    React.useEffect(() => {
        const root = document.querySelector(`.${CSS.escape(containerSelector)}`) as HTMLElement
        const options = {
            root,
            rootMargin: `${
                (document.querySelector<HTMLElement>(`.${CSS.escape(styles.header ?? '')}`)?.offsetHeight ?? 0) * -1
            }px`,
            threshold: 0,
        }
        let prevYPosition = 0
        let direction: 'up' | 'down' = 'up'

        const blocks = [...document.querySelectorAll<HTMLElement>(`.${CSS.escape(sectionSelector)}`)]
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
    }, [containerSelector, sectionSelector])

    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <a href="/#">
                    <img src={logo} alt="Paste" />
                    <span className={styles['brand-name']}>Paste</span>
                </a>
            </div>
            <nav className={cn(styles.navigation, { [styles.mobile ?? '']: mobileMenuOpen })}>
                <Menu title="Use cases" href="#usecases" submenus={useCasesSubmenus} />
                <Menu title="Resources" href="#resources" submenus={resourcesSubmenus} />
                <Menu title="Updates" href="#updates" />
                <Menu title="Pricing" href="#pricing" />
            </nav>
            <LinkButton extraClass={styles['try-for-free']} title="Try for free" href="#try" />
            <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    )
}

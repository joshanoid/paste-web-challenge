import * as React from 'react'
import cn from 'classnames'

import { LinkButton } from 'components/LinkButton'
import { Menu } from 'components/Menu'
import { MobileMenu } from 'components/MobileMenu'
import { darkTheme, lightTheme, useTheme } from 'utils/theme'
import { Theme } from 'utils/types'
import { scrollContainerClass } from 'utils/constants'

import styles from './styles.module.css'
import logo from './paste-logo.svg'
import { resourcesSubmenus, useCasesSubmenus } from './constants'
import { getTargetSection } from './utils'

export const Header = () => {
    const [theme, setTheme] = React.useState<Theme>(lightTheme)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [activeMenu, setActiveMenu] = React.useState('')

    useTheme(theme)

    React.useEffect(() => {
        const root = document.querySelector<HTMLElement>(`.${scrollContainerClass}`)

        if (root) {
            const options = {
                root,
                rootMargin: `${
                    (document.querySelector<HTMLElement>(`.${CSS.escape(styles.header ?? '')}`)?.offsetHeight ?? 0) * -1
                }px`,
                threshold: 0,
            }
            let prevYPosition = 0
            let direction: 'up' | 'down' = 'up'

            const blocks = [...document.querySelectorAll<HTMLElement>('section')]
            const intersectionObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    direction = root.scrollTop > prevYPosition ? 'down' : 'up'
                    prevYPosition = root.scrollTop

                    const entryTarget = entry.target as HTMLElement
                    const target = direction === 'down' ? getTargetSection(blocks, entryTarget) : entryTarget

                    if (
                        (direction === 'down' && !entry.isIntersecting) ||
                        (direction === 'up' && entry.isIntersecting)
                    ) {
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
        }

        return () => {}
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <a href="/#">
                    <img src={logo} alt="Paste" />
                    <span className={styles['brand-name']}>Paste</span>
                </a>
            </div>
            <nav className={cn(styles.navigation, { [styles.mobile ?? '']: mobileMenuOpen })}>
                <Menu
                    title="Use cases"
                    href="#usecases"
                    submenus={useCasesSubmenus}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
                <Menu
                    title="Resources"
                    href="#resources"
                    submenus={resourcesSubmenus}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
                <Menu title="Updates" href="#updates" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                <Menu title="Pricing" href="#pricing" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </nav>
            <LinkButton extraClass={styles['try-for-free']} title="Try for free" href="#try" />
            <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    )
}

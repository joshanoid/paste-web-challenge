import * as React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import cn from 'classnames'

import styles from './menu.module.css'

const Chevron = ({ open }: { open: boolean }) => (open ? <BsChevronDown /> : <BsChevronUp />)

type Props = {
    title: string
    href: string
    activeMenu: string
    setActiveMenu: React.Dispatch<React.SetStateAction<string>>
    submenus?: ReadonlyArray<{ title: string; href: string }>
}

export const Menu = ({ title, href, activeMenu, setActiveMenu, submenus }: Props) => {
    const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null)

    const activeStyle = styles.active ?? ''
    const openStyle = styles.open ?? ''

    return (
        <div className={styles['menu-container']}>
            <a href={href} onClick={() => setActiveMenu(title)} className={cn({ [activeStyle]: activeMenu === title })}>
                {title}
                {submenus?.length ? <Chevron open={activeMenu === title} /> : null}
            </a>
            {submenus?.length && (
                <ol className={cn({ [openStyle]: activeMenu === title })}>
                    {submenus.map((submenu) => (
                        <li key={submenu.title}>
                            <a
                                className={cn({ [activeStyle]: activeSubmenu === submenu.title })}
                                onClick={() => setActiveSubmenu(submenu.title)}
                                href={submenu.href}
                            >
                                {submenu.title}
                            </a>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    )
}

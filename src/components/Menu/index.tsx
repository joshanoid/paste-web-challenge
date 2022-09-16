import * as React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import cn from 'classnames'

import styles from './menu.module.css'

const Chevron = ({ open }: { open: boolean }) => (open ? <BsChevronDown /> : <BsChevronUp />)

type Props = {
    title: string
    href: string
    submenus?: ReadonlyArray<{ title: string; href: string }>
}

export const Menu = ({ title, href, submenus }: Props) => {
    const [open, setOpen] = React.useState(false)
    const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null)

    const activeStyle = styles.active ?? ''
    const openStyle = styles.open ?? ''

    return (
        <div className={styles['menu-container']}>
            <a href={href} onClick={() => setOpen(!open)} className={cn({ [activeStyle]: open })}>
                {title}
                {submenus?.length ? <Chevron open={open} /> : null}
            </a>
            {submenus?.length && (
                <ol className={cn({ [openStyle]: open })}>
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

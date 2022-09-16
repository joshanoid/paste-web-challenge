import * as React from 'react'
import cn from 'classnames'

import styles from './styles.module.css'

type Props = {
    title: string
    href: string
    extraClass?: string
}

export const LinkButton = ({ title, href, extraClass }: Props) => (
    <div className={cn(styles.linkbutton, extraClass)}>
        <a href={href}>{title}</a>
    </div>
)

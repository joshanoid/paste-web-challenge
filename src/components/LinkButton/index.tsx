import * as React from 'react'

import styles from './LinkButton.module.css'

type Props = {
    title: string
    href: string
}

export const LinkButton = ({ title, href }: Props) => (
    <div className={styles.linkbutton}>
        <a href={href}>{title}</a>
    </div>
)

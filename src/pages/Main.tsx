import * as React from 'react'
import cn from 'classnames'

import { Header } from 'features/Header'

import styles from './main.module.css'

export const Main = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const mainRef = React.useRef<HTMLElement | null>(null)

    return (
        <div className={styles.container} ref={containerRef}>
            <Header containerSelector={styles.container ?? ''} sectionSelector={styles['content-block'] ?? ''} />
            <main ref={mainRef}>
                <section data-theme="light" className={cn(styles['content-block'], styles.light)} />
                <section data-theme="dark" className={cn(styles['content-block'], styles.dark)} />
                <section data-theme="light" className={cn(styles['content-block'], styles.light)} />
                <section data-theme="dark" className={cn(styles['content-block'], styles.dark)} />
            </main>
        </div>
    )
}

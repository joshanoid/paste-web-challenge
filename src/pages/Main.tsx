import * as React from 'react'
import cn from 'classnames'

import { Header } from 'features/Header'
import { scrollContainerClass } from 'utils/constants'

import styles from './main.module.css'

export const Main = () => (
    <div className={cn(styles.container, scrollContainerClass)}>
        <Header />
        <main>
            <section data-theme="light" className={cn(styles['content-block'], styles.light)} />
            <section data-theme="dark" className={cn(styles['content-block'], styles.dark)} />
            <section data-theme="light" className={cn(styles['content-block'], styles.light)} />
            <section data-theme="dark" className={cn(styles['content-block'], styles.dark)} />
        </main>
    </div>
)

import * as React from 'react'

import { Theme } from './types'

export const useTheme = (theme: Theme) => {
    React.useLayoutEffect(() => {
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value)
        })
    }, [theme])
}

export const lightTheme: Theme = {
    'text-color': '#101010',
    'text-hover-color': '#6E6E73',
    'text-active-color': '#ABABB0',
    'background-color': 'rgba(255, 255, 255, 0.6)',
    'menu-hover-color': '#f3f4f6',
    'menu-background-color': '#fff',
}

export const darkTheme: Theme = {
    'text-color': '#fff',
    'text-hover-color': '#ABABB0',
    'text-active-color': 'rgba(171, 171, 176, 0.5)',
    'background-color': 'rgba(39, 39, 39, 0.9)',
    'menu-hover-color': '#0c0b09',
    'menu-background-color': '#272727',
}

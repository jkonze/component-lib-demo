import React from 'react'
import styles from './MyComponent.scss'

interface MyComponentProps {
    name: string
}

export const MyComponent: React.FC<MyComponentProps> = ({name}) => {
    return (
        <div className={styles.demo}>
            My First Component: {name}
        </div>
    )
}

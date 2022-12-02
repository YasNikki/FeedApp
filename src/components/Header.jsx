import feedLogo from '../assets/rss.png'

import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <strong>ALXFeed</strong>
            <img src={ feedLogo } alt="Feed Logo" />
        </header>
    )
}
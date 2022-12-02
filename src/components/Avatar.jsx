import styles from './Avatar.module.css'

export function Avatar(){
    return(
        <div className={styles.profile}>
        {/* <Avatar src="https://github.com/alef365.png" /> */}
        <img src="https://i.pinimg.com/originals/3b/0d/d1/3b0dd19325d23e0c79b9197789c704d4.jpg" alt="pfp" />
        <strong>ALX</strong>
        <span>PXG</span>
    </div>

    )





}
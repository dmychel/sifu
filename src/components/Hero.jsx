import styles from "/src/styles/hero.module.scss"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_elements}>
                <img className={styles.awards} src="/assets/img/stamps_horizontal.png" alt="" />
                <img className={styles.logo} src="/assets/img/sifu-header.png" alt="" />

                <div className={styles.platforms}>
                    <p>AVAILABLE NOW</p>
                    <ul >
                        <li><img src="/assets/img/xbox.png" alt="" /></li>
                        <li><img src="/assets/img/playstation.png" alt="" /></li>
                        <li><img src="/assets/img/nintendo.png" alt="" /></li>
                        <li><img src="/assets/img/steam.png" alt="" /></li>
                        <li><img src="/assets/img/epic.png" alt="" /></li>
                    </ul>
                </div>

                <div className={styles.follow}>
                    <p>FOLLOW US</p>
                    <ul>
                        <li><img src="/assets/img/facebook.png" alt="" /></li>
                        <li><img src="/assets/img/twitter.png" alt="" /></li>
                        <li><img src="/assets/img/youtube.png" alt="" /></li>
                        <li><img src="/assets/img/reddit.png" alt="" /></li>
                    </ul>
                </div>
                <button>NEWS LETTER</button>

            </div>

        </div>
    )
}
import styles from '/src/styles/arenas.module.scss'
export default function Arenas() {
    return (
        <div className={styles.arenas}>
            <div className={styles.arena_content}>
                <div className={styles.left}>
                    <h2>ENTER THE
                        <br />
                        ARENAS
                    </h2>
                    <p>
                        Itching for some more good ol' Kung Fu action? The free Arenas expansion adds multiple hours of gameplay that will put your Kung Fu to the test. With 5 new game modes, 9 dynamic locations and 45 challenges, gear up for spectacular combats, brutal opponents, and endless opportunities to refine your moves.
                    </p>
                </div>
                <div className={styles.right}><iframe width="560" height="315" src="https://www.youtube.com/embed/jlA2NKto1yA?si=WFXpIJCGY1XfZY6r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

            </div>

        </div>
    )
}
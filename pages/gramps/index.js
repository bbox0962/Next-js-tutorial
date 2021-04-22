import styles from "../../styles/Gramps.module.css"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { gramps: data }
    }
}

const Gramps = ({ gramps }) => {
    return (
        <div>
            <h1>Gramps Pad</h1>
            {gramps.map((gramp) => (
                <Link href={'/gramps/' + gramp.id} key={gramp.id}>
                    <a className={styles.single}>
                        <h3>{ gramp.name }</h3>
                    </a>
                </Link>

            ))}
        </div>
    )
}

export default Gramps

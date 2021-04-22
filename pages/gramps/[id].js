export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(gramp => {
        return {
            params: { id: gramp.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { gramp: data }
    }
}

const Details = ({ gramp }) => {
    return (
        <div>
            <h1>{ gramp.name }</h1>
            <p>{ gramp.email }</p>
            <p>{ gramp.website }</p>
            <p>{ gramp.address.city }</p>
        </div>
    );
}
 
export default Details;
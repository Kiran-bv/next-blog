function UserList() {
    return (
        <h2>Users</h2>
    )
}
export default UserList;

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log("Data :::::: ", data);
    return {
        props: { users: data }
    }
}
import styles from "../page.module.css";

async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await userList();
  console.log(users);
  return (
    <>
      <main className={styles.main}>
        <h2>User List</h2>
        {users.map((item) => {
          <div>
            <h2>User Name {item.firstName}</h2>
          </div>
        })}
      </main>
    </>
  );
}

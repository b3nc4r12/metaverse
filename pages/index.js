import Head from "next/head"
import Login from "../components/Login"
import { useMoralis } from "react-moralis"

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />
  } else {
    return (
      <div className="h-screen">
        <Head>
          <title>Metaverse</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Welcome to the Metaverse</h1>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }
}

export default Home
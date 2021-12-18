import Head from "next/head"
import Login from "../components/Login"
import { useMoralis } from "react-moralis"
import Header from "../components/Header"
import Messages from "../components/Messages"
import UsernameModal from "../components/UsernameModal"
import PfpModal from "../components/PfpModal"

const Home = () => {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden bg-image">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </main>

      <UsernameModal />
      <PfpModal />
    </div>
  )
}

export default Home
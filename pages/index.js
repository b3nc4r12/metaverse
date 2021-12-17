import Head from "next/head"
import Login from "../components/Login"
import { useMoralis } from "react-moralis"
import Header from "../components/Header"
import Messages from "../components/Messages"
import Modal from "../components/Modal"
import Fade from "react-reveal/Fade"

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-auto bg-image">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-2xl mx-auto">
        <Header />
        <Fade bottom>
          <Messages />
        </Fade>
      </main>

      <Modal />
    </div>
  )
}

export default Home
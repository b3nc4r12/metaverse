import Head from "next/head"
import Image from "next/image"
import { useMoralis } from "react-moralis"
import Fade from "react-reveal/Fade"
import Typewriter from "typewriter-effect"

const Login = () => {
    const { authenticate, isAuthenticating } = useMoralis();

    return (
        <div className="bg-black relative flex items-center justify-center">
            <Head>
                <title>Login to the Metaverse</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Fade top>
                <div className="flex flex-col absolute z-50 h-1/2 w-4/5 items-center justify-center space-y-16 bg-transparent backdrop-blur-md">
                    <h1 id="text" className="text-white text-5xl font-bold text-center">
                        <Typewriter
                            options={{
                                autoStart: true,
                                delay: 100,
                                strings: "Enter the METAVERSE",
                                cursorClassName: "text-white",
                                cursor: "..."
                            }}
                        />
                    </h1>

                    <button
                        disabled={isAuthenticating}
                        onClick={authenticate}
                        className="bg-white rounded-lg px-5 py-2.5 font-bold animate-pulse flex items-center"
                    >
                        <Image
                            src="/metamask.png"
                            width={20}
                            height={20}
                            objectFit="contain"
                        />
                        <span className="ml-2">{!isAuthenticating ? "Metamask Login" : "Loading..."}</span>
                    </button>
                </div>
            </Fade>
            <div className="w-full h-screen">
                <Image
                    src="https://www.msi.com/Landing/creator-awards/uploads/images/1fec1378bf868ac4a86b5fefc0876f76.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login

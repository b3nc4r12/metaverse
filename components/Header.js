import { useMoralis } from "react-moralis"
import Image from "next/image"
import Avatar from "./Avatar"
import ChangeUsername from "./ChangeUsername"
import Fade from "react-reveal/Fade"

const Header = () => {
    const { user, logout } = useMoralis();

    return (
        <header className="sticky top-0 p-5 z-50 bg-transparent backdrop-blur-md shadow-sm border-b-2 border-white text-white">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <Fade left>
                    <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                        <Image
                            src="https://images.creativemarket.com/0.1.0/ps/6711455/1820/1023/m1/fpnw/wm1/caqbtfdlrmathxs1q3urmlblctdlxvccxifgyepafxgdwhixibu7y2e5e17ffqnq-.jpg?1563630609&s=ce79f47c517786b7aa01eabd677a198f"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                </Fade>

                <div className="text-left lg:text-center col-span-4">
                    <Fade top>
                        <div className="relative h-48 w-48 lg:mx-auto border-8 border-white rounded-full">
                            <Avatar
                                username={user.get("username")}
                                changePfpOnPress
                            />
                        </div>

                        <h1 className="text-3xl">
                            Welcome to the METAVERSE
                        </h1>
                        <h2 className="text-5xl font-bold truncate">
                            {user.getUsername()}
                        </h2>
                    </Fade>

                    <Fade right>
                        <div className="flex items-center absolute top-5 right-5 space-x-2">
                            <ChangeUsername />
                            <p>|</p>
                            <button onClick={logout} className="text-sm hover:text-gray-300">Logout</button>
                        </div>
                    </Fade>
                </div>
            </div>
        </header>
    )
}

export default Header
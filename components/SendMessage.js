import { useState } from "react"
import { useMoralis } from "react-moralis"

const SendMessage = ({ endOfMessagesRef }) => {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        })
            .then(
                () => { },
                (error) => console.log(error.message)
            )

        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        setMessage("");
    }

    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl">
            <input
                type="text"
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
                placeholder={`Enter a message as ${user.getUsername()}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="font-bold text-white"
                onClick={sendMessage}
            >
                Send
            </button>
        </form>
    )
}

export default SendMessage
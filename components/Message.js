import { useMoralis } from "react-moralis"
import Avatar from "./Avatar"
import Moment from "react-moment"

const Message = ({ message }) => {
    const { user } = useMoralis();

    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
            <Moment fromNow className={`text-xs text-white ${!isUserMessage && "order-last ml-2"}`}>
                {message.get("createdAt")}
            </Moment>
            <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
                <Avatar username={message.get("username")} />
            </div>
            <div className={`flex space-x-4 p-2 rounded-lg ${isUserMessage ? "rounded-br-none bg-gray-300" : "rounded-bl-none bg-blue-400"}`}>
                <p>{message.get("message")}</p>
            </div>

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-gray-300" : "text-blue-400"}`}>{message.get("username")}</p>
        </div>
    )
}

export default Message
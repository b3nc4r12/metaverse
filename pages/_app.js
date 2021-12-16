import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"

const MyApp = ({ Component, pageProps }) => {
  return (
    <MoralisProvider
      appId={process.env.moralis_app_id}
      serverUrl={process.env.moralis_server_url}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { RecoilRoot } from "recoil"

const MyApp = ({ Component, pageProps }) => {
  return (
    <MoralisProvider
      appId={process.env.moralis_app_id}
      serverUrl={process.env.moralis_server_url}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default MyApp
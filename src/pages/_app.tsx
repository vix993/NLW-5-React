import { Header } from '../components/Header';
import { Player } from '../components/Player';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <main className="flex-1">
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp

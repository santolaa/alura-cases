import GlobalStyle from '../src/theme/GlobalStyle'

function AluraCases({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default AluraCases

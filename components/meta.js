import Head from 'next/head'

export default props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Ivana Mrázková{props.title && ": " + props.title} - ivana-mrazkova.cz</title>
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box; margin: 0; padding: 0;
        font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    `}</style>
  </div>
)
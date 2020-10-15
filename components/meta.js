import Head from 'next/head'

const Meta = props => <div>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="google-site-verification" content="lR8OmVZ9TsU4JhFWjJgX9iOk6-P3t1x2Lx_8SvNzf-Q" />
    <title>Ivana Mrázková{props.title && ": " + props.title} - ivana-mrazkova.cz</title>
  </Head>
  <style jsx global>{`
    * {
      box-sizing: border-box; margin: 0; padding: 0;
      font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 300;
    }
  `}</style>
</div>;

export default Meta;
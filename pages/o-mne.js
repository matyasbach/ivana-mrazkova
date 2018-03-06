import Layout from '../components/layout'

export default () => (
  <Layout>
    <img src="/static/images/ivana.jpg" width="300" />
    <style jsx>{`
      img {
        margin: 2em;
        filter: grayscale(100%);
      }
    `}</style>
    <style jsx global>{`
    .outer {
      background: #ffffff;
    }
  `}</style>
  </Layout>
)
import Layout from '../components/layout'
import Header from '../components/homepage/header'
import Content from '../components/homepage/content'

export default () => (
  <Layout header={<Header />}>
    <Content />
  </Layout>
)
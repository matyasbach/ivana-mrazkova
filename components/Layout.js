import Fonts from './fonts'
import GeneralContent from './general-content'
import Header from './header'
import Meta from './meta'

class Layout extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <Meta title={this.props.title} />
          {this.props.header || <Header />}
        </header>
        <main className="content">
          {this.props.customContent
            ? this.props.children
            : <GeneralContent>{this.props.children}</GeneralContent>
          }
        </main>
        <footer className="footer">
          <div className="footer-inner"></div>
        </footer>
        <style jsx global>{`
          @font-face {
            font-family: 'AgencyFB';
            src: url('../../static/fonts/Agency_FB.ttf') format('truetype');
          }
        `}</style>
        <style jsx>{`
          .wrapper {
            min-height: 100vh;
            display: flex;
            flex-flow: column wrap;
          }
          .header {
            background: url('/static/images/background.jpg') no-repeat center top scroll;
            background-size: 140%;
            padding-top: 100px;
          }
          .content {
            flex: 1;
          }
          .footer {
            background: url('/static/images/background.jpg') no-repeat center bottom scroll;
            background-size: 120%;
            height: 100px;
          }
          .footer-inner {
            height: 35px;
            width: 100%;
            background: rgba(233, 233, 233, 0.8);
          }
          @media only screen and (min-width: 750px) {
            .header {
              background-size: cover;
              background-position-y: -425px;
              padding-top: 200px;
            }
            .footer {
              background-size: cover;
              background-position-y: -1050px;
              height: 200px;
            }
            .footer-inner {
              height: 70px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
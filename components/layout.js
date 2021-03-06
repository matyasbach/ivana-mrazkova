import GeneralContent from './general-content'
import Header from './header'
import Meta from './meta'

import 'react-image-lightbox/style.css' // used at portfolio page only, needs to be here until https://github.com/zeit/next-plugins/issues/282 is solved 

class Layout extends React.Component {
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
          @import url('https://fonts.googleapis.com/css?family=Roboto:300');
          @font-face {
            font-family: 'AgencyFB';
            src: url('../../static/fonts/Agency_FB.ttf') format('truetype');
          }
        `}</style>
        <style jsx>{`
          .wrapper {
            min-height: 100vh;
            display: flex;
            flex-flow: column;
          }
          .header {
            background: url('/static/images/background.jpg') no-repeat center 37% scroll;
            background-size: cover;
            padding-top: ${this.props.dimmBackground ? "0" : "100px"};
          }
          .content {
            flex: 1;
          }
          .footer {
            background: url('/static/images/background.jpg') no-repeat center 86% scroll;
            background-size: cover;
            height: 100px;
          }
          .footer-inner {
            height: ${this.props.dimmBackground ? "100%" : "35px"};
            width: 100%;
            background: rgba(233, 233, 233, 0.8);
          }
          @media only screen and (min-width: 750px) {
            .header {
              padding-top: ${this.props.dimmBackground ? "0" : "200px"};
            }
            .footer {
              height: 200px;
            }
            .footer-inner {
              height: ${this.props.dimmBackground ? "100%" : "70px"};
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
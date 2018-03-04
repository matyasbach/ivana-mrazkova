
import Meta from './meta'
import Header from './header'

const Layout = (props) => (
  <div className="outer">
    <Meta title={props.title} />
    <div className="inner">
      {props.header || <Header />}
      <div className="content">
        {props.children}
      </div>
    </div>
    <style jsx>{`
      :global(body) {        
        background: url('/static/images/background.jpg') no-repeat center center fixed;
        background-size: cover;
      }

      .outer {        
        min-height: 100vh;
        transition: background-color 1000ms linear;
      }

      .inner {
        min-height: 100vh;
        width: 100%;
        margin: auto;
        background: rgba(255, 255, 255, 0.8);
        display: flex;
        flex-direction: column;
      }

      @media only screen and (min-width: 450px) {
        .inner {
          width: 90%;
        }
      }
      
      .content {
        flex: 1;
      }
    `}</style>
  </div>
)

export default Layout
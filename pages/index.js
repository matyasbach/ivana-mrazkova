import Meta from '../components/meta'
import Links from '../components/homepage/Links'

export default () => (
  <div className="homepage">
    <Meta />
    <div className="inner">
      <h2>malířka</h2>
      <h1>Ivana Mrázková</h1>
      <div className="content">
        <Links />
      </div>
    </div>
    <style jsx>{`
      .homepage {
        min-height: 100vh;
        background: url('/static/images/background.jpg') no-repeat center center fixed;
        background-size: cover;
      }

      .inner {
        min-height: 100vh;
        width: 100%;
        margin: auto;
        background: rgba(255, 255, 255, 0.8);
        /*box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.8);*/
        /*box-shadow: 0px 0px 20px 5px rgba(255,255,255,0.8);*/
        display: flex;
        flex-direction: column;
      }

      @media only screen and (min-width: 450px) {
        .inner {
          width: 90%;
        }
      }

      h1, h2 {        
        text-align: center;
        color: #301030;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
      }

      h1 {
        font-size: 400%;
        padding-bottom: 10vh;
      }
      h2 {
        padding-top: 10vh;
        font-style: italic;
      }

      .content {
        flex: 1;
      }
    `}</style>
  </div>
)
import Link from 'next/link'

import Layout from '../components/layout'

const Index = () => <Layout customContent={true}>
  <div id="homepage">
    <div id="hole">
      <h1>Ivana Mrázková Bachová</h1>
    </div>
    <ul>
      <li>
        <Link href="/portfolio">
          <a>
            <span>Portfolio</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/vystavy">
          <a>
            <span>Výstavy</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/o-mne">
            <a>
              <span>O mně / Kontakt</span>
            </a>
        </Link>
      </li>
    </ul>
  </div>
  <style jsx>{`
    #homepage {
      background: url('/static/images/background.jpg') no-repeat center center scroll;
      background-size: cover;
      min-height: 100vh;
      padding-top: 5vh;
    }

    #hole {
      margin: 0 auto 5vh;
      height: 80vmin;
      width: 80vmin;
      border-radius: 50%;
      box-shadow: 0 0 10000px 10000px rgba(255,255,255,0.62);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-content: center;
    }
    
    h1 {
      font-family: 'AgencyFB', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-size: calc(80vmin * 0.17);
      font-weight: normal;
      color: white;
      position: relative;
      bottom: 1vmin;
      text-align: center;
      text-transform: uppercase;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: center;
      list-style: none;
      max-width: 1200px;
      margin: auto;
    }
    li {
      margin: 0.5em 2em;
      text-align: center;
      display: inline-block;
    }
    a {
      text-transform: uppercase;
      text-decoration: none;
      font-family: 'Roboto', 'Segoe UI', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      color: #1e7981;
      width: 100%;
      display: block;
    }
    a span:first-child {
      font-size: 220%;
      display: block;
    }

    @media only screen and (min-width: 750px) {
      a span:first-child {
        font-size: 300%;
      }
    }
  `}</style>
  <style jsx global>{`
    .footer, .header {
      display: none;
    }
  `}</style>
</Layout>;

export default Index;
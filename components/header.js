import Link from 'next/link'

import Menu from './menu'

const Header = () => (
  <div className="header-wrapper">
    <div className="header-inner">
      <Link href="/">
        <a>Ivana Mrázková</a>
      </Link>
      <Menu />
    </div>
    <style jsx>{`
      .header-wrapper {
        background-color: rgba(233, 233, 233, 0.8);
      }
      .header-inner {
        padding: 0.4em 0;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      a {
        width: 100%;
        margin: auto;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        color: rgb(70, 70, 70);
        font-family: 'AgencyFB', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 200%;
      }

      @media only screen and (min-width: 750px) {
        .header-wrapper {
          padding-top: 10px;
        }
        .header-inner {
          padding: 0.8em;
          border-top: 1px solid rgb(70, 70, 70);
        }

        a {
          width: auto;
          margin: 0.1em 0 0 2em;
        }
      }
    `}</style>
  </div>
)

export default Header;
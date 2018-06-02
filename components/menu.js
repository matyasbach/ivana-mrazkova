import Link from 'next/link'
import Router, { withRouter } from 'next/router'

const MenuItem = withRouter(({children, router, href}) => {
  const active = href == router.pathname || href == router.asPath
  const className = active ? 'active' : ''
  console.log(router)

  return (
    <li className={className}>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
      <style jsx>{`
        li {
          width: 100%;
          text-align: center;
          padding: 0.7em;
          display: inline-block;
          position: relative;
        }

        li.active {
          background: rgba(255, 255, 255, 0.5);
        }
        
        a {
          padding: 0 1.5em;
          text-decoration: none;
          text-transform: uppercase;
          color: rgb(70, 70, 70);
          font-size: 100%;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }

        @media only screen and (min-width: 750px) {
          li {
            width: auto;
          }

          li.active {
            background: transparent;
          }

          li.active:after, li.active:before {
            top: -42%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }
          li.active:before {
            border-color: rgba(255, 255, 255, 0);
            border-top: 1px solid rgb(70, 70, 70);
            border-width: 9px;
            margin-left: -9px;
          }
        }
      `}</style>
    </li>
  )
})

const Menu = () => (
  <ul>
    <MenuItem href="/portfolio">Portfolio</MenuItem>
    <MenuItem href="/vystavy">Výstavy</MenuItem>
    <MenuItem href="/o-mne">O mně / Kontakt</MenuItem>
    <style jsx>{`
      ul {
        width: 100%;
        margin: 0;
        padding: 0.3em 0;
        list-style: none;
        align-self: flex-end;
      }

      @media only screen and (min-width: 750px) {
        ul {
          width: auto;
        }
      }
    `}</style>
  </ul>
)

export default Menu
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
          display: inline-block;
          position: relative;
        }
        
        a {
          padding: 0 0.5em;
          text-decoration: none;
          color: #444;
          font-size: 150%;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          border-right: 1px solid gray;
        }
        a.active {
          color: #301030;
        }
        li.active:after, li.active:before {
          top: 70%;
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
          border-bottom-color: #000;
          border-width: 9px;
          margin-left: -9px;
        }
        li:last-child a {
          border: none;
        }
      `}</style>
    </li>
  )
})

const Menu = () => (
  <ul>
    <MenuItem href="/portfolio">Portfolio</MenuItem>
    <MenuItem href="/vystavy">Výstavy</MenuItem>
    <MenuItem href="/o-mne">O mně</MenuItem>
    <style jsx>{`      
      ul {
        margin: 0.5em 2em;
        /*margin-right: 20vh;*/
        list-style: none;
        align-self: flex-end;
        padding: 1em 1em 0.6em;
        border-bottom: 2px solid black;
      }
    `}</style>
  </ul>
)

export default Menu
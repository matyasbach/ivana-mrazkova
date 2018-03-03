import Link from 'next/link'

const Menu = () => (
  <div className='menu'>
    <ul>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link as="/vystavy" href="/exhibitions">
          <a>Výstavy</a>
        </Link>
      </li>
      <li>
        <Link as="/o-mne" href="/about">
          <a>O mně</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        float: right;
        margin: 0;
      }

      li {
        margin: 0.1em;
        display: inline-block;
      }
      
      a {
        text-decoration: none;
        color: #444;
        padding: 2em 1.5em 2em;
        background: green;
      }
    `}</style>
  </div>
)

const FloatClearer = () => (
  <div>
    <style jsx>{`
      div {
        clear: both;
      }
    `}</style>
  </div>
)

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>Ivana Mrázková</a>
    </Link>
    <Menu />
    <FloatClearer />
    <style jsx>{`
      a {
        text-decoration: none;
        color: #444;
        float: left;
        font-size: 200%;
        font-family: 'Lovelo';
        display: inline-block;
        height: 100%;
      }
      .header {
        max-width: 800px;
        margin: auto;
        background: #eee;
        padding: 1em;
      }
    `}</style>
  </div>
)

export default Header;
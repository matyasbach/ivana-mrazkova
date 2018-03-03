import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/portfolio">
        <a>
          <span>Portfolio</span>
          <span>Galerie mých obrazů</span>
        </a>
      </Link>
    </li>
    <li>
      <Link as="/vystavy" href="/exhibitions">
        <a>
          <span>Výstavy</span>
          <span>Minulé, probíhající i plánované</span>
        </a>
      </Link>
    </li>
    <li className="about">
      <Link as="/o-mne" href="/about">
          <a>
            <span>O mně</span>
            <span>Jak jsem se dostala k malování, kontakt</span>
          </a>
      </Link>
    </li>
    <style jsx>{`
      ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        height: 50vh;
        list-style: none;
        max-width: 1200px;
        margin: auto;
      }
      li {
        min-width: 300px;
        width: 40%;
        margin: auto;
        /*background-color: rgba(0,0,0,0.5);*/
        text-align: center;
      }
      a {
        text-decoration: none;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: #301030;
        width: 100%;
        display: block;
      }
      a span:first-child {
        font-size: 300%;
        display: block;
      }
      `}</style>
    </ul>
)
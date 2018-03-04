import Link from 'next/link'

class MobileMenu extends React.Component {
  state = {
    visible: false
  }  

  toggle = () => {
    this.setState({ visible: !this.state.visible })
  }

  renderMenu() {
    return (
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
        <style jsx>{`
          ul {
            position: absolute;
            top: 2.5em;
            left: 0;
            width: 100vw;
            background: #fff;
            list-style: none;
            z-index: 50;
          }
          
          li {
            text-align: center;
            padding: 2em;
          }
          
          a {        
            padding: 0 0.5em;
            text-decoration: none;
            color: #444;
            font-size: 150%;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          }
        `}</style>
      </ul>
    )
  }

  render() {
    const renderMenu = this.state.visible ? this.renderMenu() : ''

    return (
      <div>
        <button type="button" onClick={this.toggle}>Menu</button>
        {renderMenu}
        <style jsx>{`
          button {
            padding: 0 0.5em;
            text-decoration: none;
            color: #444;
            font-size: 150%;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            border: none;
            outline: none;
            background: none;

          }
        `}</style>
      </div>
    )
  }
}

export default MobileMenu
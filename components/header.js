import { Component } from 'react'
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

const FullMenu = () => (
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
        margin: 0.5em 2em;
        /*margin-right: 20vh;*/
        list-style: none;
        align-self: flex-end;
      }
      
      li {
        display: inline-block;
      }
      
      a {
        padding: 0 0.5em;
        text-decoration: none;
        color: #444;
        font-size: 150%;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        border-right: 1px solid gray;
      }
      li:last-child a {
        border: none;
      }
    `}</style>
  </ul>
)

class Menu extends Component {
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ mobile: window.innerWidth < 750 });
  }

  state = {
    mobile: true,
  }

  render() {
    if(this.state.mobile)
      return <MobileMenu />
    else
      return <FullMenu />
  }
}

const Header = () => (
  <div>
    <Link href="/">
      <a>Ivana Mrázková</a>
    </Link>
    <Menu />
    <style jsx>{`
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #222;
      }
      a {
        text-decoration: none;
        color: #301030;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 200%;
        margin-left: 2em;
      }
    `}</style>
  </div>
)

export default Header;
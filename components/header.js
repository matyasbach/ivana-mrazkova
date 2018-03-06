import { Component } from 'react'
import Link from 'next/link'

import MobileMenu from './mobile-menu'
import FullMenu from './full-menu'

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
    mobile: null,
  }

  render() {
    if(this.state.mobile)
      return <MobileMenu />
    else if(!this.state.mobile)
      return <FullMenu />
    else
      return null
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
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
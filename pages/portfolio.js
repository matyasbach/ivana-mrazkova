import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import ScrollLock from 'react-scrolllock'

import Layout from '../components/layout'

import images from '../static/pictures/pictures'

const imagesForLightbox = images.map(image => {
  const imagePath = "/static/pictures/"
  return {
    width: image.width,
    height: image.height,
    caption: image.caption,
    src: `${imagePath}1600w/${image.name}`, 
    srcSet: [
      `${imagePath}350w/${image.name} 350w`,
      `${imagePath}600w/${image.name} 600w`,
      `${imagePath}1024w/${image.name} 1024w`,
      `${imagePath}1600w/${image.name} 1600w`,
    ]
  }
})

const imagesForGallery = imagesForLightbox.map(image => { return {...image, sizes: ["40vw"]} })

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      mobile: true
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

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

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  scrollLock() {
    if(this.state.lightboxIsOpen)
      return <ScrollLock />
  }

  render() {
    return (
      <Layout title="Portfolio" customContent={true} dimmBackground={true}>
        <div className="portfolio">
          <Gallery
            photos={imagesForGallery}
            columns={this.state.mobile ? 2 : 4}
            margin={this.state.monile ? 5 : 20}
            onClick={this.openLightbox}
          />
          <Lightbox images={imagesForLightbox}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            preventScroll={false} // doesn't work properly, solved with ScrollLock
          />
          {this.scrollLock()}
        </div>
        <style jsx>{`
          .portfolio {
            margin: auto;
            padding: 25px 10px;
            max-width: 1200px;
          }
          img {
            margin: 1em;
          }
          @media only screen and (min-width: 750px) {
            .portfolio {
              padding: 70px 10px;
            }
          }
        `}</style>
    </Layout>
    )
  }
}

export default Portfolio
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import ScrollLock from 'react-scrolllock'

import Layout from '../components/layout'

import images from '../static/pictures/pictures'
import imagesGrouped from '../static/pictures/pictures-grouped'

const imagePath = "/static/pictures/"
const groupedImagedWithSrcPaths = imagesGrouped.map(imageGroup => 
  imageGroup.map(imageName => {
    return {
      ...images.find(image => image.name === imageName),
      src: `${imagePath}1600w/${imageName}`, 
      srcSet: [
        `${imagePath}350w/${imageName} 350w`,
        `${imagePath}600w/${imageName} 600w`,
        `${imagePath}1024w/${imageName} 1024w`,
        `${imagePath}1600w/${imageName} 1600w`,
      ]
    }
  }))

const imagesForLightbox = [].concat(...groupedImagedWithSrcPaths)

const imagesForGallery = groupedImagedWithSrcPaths.map(imageGroup =>
  imageGroup.map(image => { return {...image, sizes: ["40vw"]} }))

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
      currentImage: imagesForLightbox.findIndex(i => i.name === obj.photo.name),
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
      <Layout title="Portfolio" customContent={true} dimmBackground={false}>
        <div className="portfolio">
          {
            imagesForGallery.map(imageGroup => {
              return (
                <div className="image-group">
                  <Gallery
                    photos={imageGroup}
                    columns={this.state.mobile ? 2 : 4}
                    margin={this.state.mobile ? 5 : 20}
                    onClick={this.openLightbox}
                    />
                </div>
              )
            })
          }
          <p style={{textAlign: "right", marginRight: "20px"}}>Nafocení obrazů: Radek&nbsp;Dětinský</p>
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
          .image-group {
            margin: 5em 0;
          }
          .image-group:first-child {
            margin-top: 0;
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
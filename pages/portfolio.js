import Gallery from 'react-photo-gallery'
import Lightbox from 'react-image-lightbox';

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
      lightboxIsOpened: false,
      isMobile: true
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
    this.setState({ isMobile: window.innerWidth < 750 });
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: imagesForLightbox.findIndex(i => i.name === obj.photo.name),
      lightboxIsOpened: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpened: false,
    });
  }

  gotoPrevious() {
    this.setState(prevState => ({
      currentImage: Math.max(prevState.currentImage - 1, 0),
    }));
  }

  gotoNext() {
    this.setState(prevState => ({
      currentImage: Math.min(prevState.currentImage + 1, imagesForLightbox.length - 1),
    }));
  }

  renderLightbox() {
    const { currentImage } = this.state;
    const nextSrc = currentImage < imagesForLightbox.length - 1
      ? imagesForLightbox[currentImage + 1].src : null;
    const prevSrc = currentImage > 0
      ? imagesForLightbox[currentImage - 1].src : null;

    return (
      <React.Fragment>
        <Lightbox
          mainSrc={imagesForLightbox[currentImage].src}
          nextSrc={nextSrc}
          prevSrc={prevSrc}
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.gotoPrevious}
          onMoveNextRequest={this.gotoNext}
          imageCaption={imagesForLightbox[currentImage].caption}
          imagePadding={this.state.isMobile ? 0 : 40}
          imageLoadErrorMessage="Obraz se nepovedlo načíst :/"
          prevLabel="Předchozí obraz"
          nextLabel="Další obraz"
          zoomInLabel="Příblížit"
          zoomOutLabel="Oddálit"
          closeLabel="Zavřít"
        />
        <style jsx global>{`
          .ril-caption, .ril-toolbar {
            background: transparent;
          }
          .ril-toolbar button {
            outline-color: transparent;
          }
          .ril-prev-button, .ril-next-button {
            background-color: transparent;
            outline-color: transparent;
          }
          .ril-caption-content {
            margin: auto;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 4px 4px 0 0;
          }
        `}</style>
      </React.Fragment>
    )
  }
  
  render() {
    return (
      <Layout title="Portfolio" customContent={true} dimmBackground={false}>
        <div className="portfolio">
          {
            imagesForGallery.map((imageGroup, i) => {
              return (
                <div className="image-group" key={`group-${i}`}>
                  <Gallery
                    photos={imageGroup}
                    columns={this.state.isMobile ? 2 : 4}
                    margin={this.state.isMobile ? 5 : 20}
                    onClick={this.openLightbox}
                    />
                </div>
              )
            })
          }
          <p style={{textAlign: "right", marginRight: "20px"}}>Nafocení obrazů: Radek&nbsp;Dětinský</p>
          {this.state.lightboxIsOpened && this.renderLightbox()}
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
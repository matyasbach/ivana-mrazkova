import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import ScrollLock from 'react-scrolllock'

import Layout from '../components/layout'

const images = [
  {
    src: "/static/pictures/buk.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/buk.jpg",
    width: 540,
    height: 700,
    caption: "Buk"
  },
  {
    src: "/static/pictures/velka-destna.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/velka-destna.jpg",
    width: 700,
    height: 522,
    caption: "Velká Deštná"
  },
  {
    src: "/static/pictures/kamenny-potok.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/kamenny-potok.jpg",
    width: 699,
    height: 700,
    caption: "Kamenný potok"
  },
  {
    src: "/static/pictures/lisejniky.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/lisejniky.jpg",
    width: 507,
    height: 700,
    caption: "Lišejníky"
  },
  {
    src: "/static/pictures/mala-upa.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/mala-upa.jpg",
    width: 700,
    height: 460,
    caption: "Malá Úpa"
  },
  {
    src: "/static/pictures/doubrava.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/doubrava.jpg",
    width: 700,
    height: 467,
    caption: "Doubrava"
  },
  /*{
    src: "/static/pictures/na-rosnicce.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/na-rosnicce.jpg",
    width: 514,
    height: 700,
    caption: "Na rosničce"
  },*/
  {
    src: "/static/pictures/obri-dul.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/obri-dul.jpg",
    width: 700,
    height: 692,
    caption: "Obří důl"
  },
  {
    src: "/static/pictures/orlicke-hory.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/orlicke-hory.jpg",
    width: 700,
    height: 576,
    caption: "Orlické hory"
  },
  {
    src: "/static/pictures/tani.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/tani.jpg",
    width: 700,
    height: 695,
    caption: "Tání"
  },{
    src: "/static/pictures/divoka-sarka.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/divoka-sarka.jpg",
    width: 591,
    height: 700,
    caption: "Divoká Šárka"
  },
  {
    src: "/static/pictures/doubrava-2.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/doubrava-2.jpg",
    width: 584,
    height: 700,
    caption: "Doubrava"
  },
  {
    src: "/static/pictures/jeleni-bucina.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/jeleni-bucina.jpg",
    width: 570,
    height: 700,
    caption: "Jelení bučina"
  },
  {
    src: "/static/pictures/obolce.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/obolce.jpg",
    width: 700,
    height: 694,
    caption: "Obolce"
  },
  {
    src: "/static/pictures/pred-oboleckym-lesem.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/pred-oboleckym-lesem.jpg",
    width: 700,
    height: 690,
    caption: "Před Oboleckým lesem"
  },
  {
    src: "/static/pictures/svitavske-vrby.jpg",
    thumbnail: "/static/pictures/thumbnails-h350/svitavske-vrby.jpg",
    width: 506,
    height: 700,
    caption: "Svitavské vrby"
  },
]

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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
      <Layout title="Portfolio">
        <Gallery photos={images} onClick={this.openLightbox} />
        <Lightbox images={images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          preventScroll={false} // doesn't work properly, solved with ScrollLock
        />
        {this.scrollLock()}
        <style jsx global>{`
          .outer {
            background: #ffffff;
          }
        `}</style>
    </Layout>
    )
  }
}

export default Portfolio
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import ScrollLock from 'react-scrolllock'

import Layout from '../components/layout'

const images = [
  {
    name: "buk.jpg",
    width: 540,
    height: 700,
    caption: "Buk"
  },
  {
    name: "velka-destna.jpg",
    width: 700,
    height: 522,
    caption: "Velká Deštná"
  },
  {
    name: "kamenny-potok.jpg",
    width: 699,
    height: 700,
    caption: "Kamenný potok"
  },
  {
    name: "lisejniky.jpg",
    width: 507,
    height: 700,
    caption: "Lišejníky"
  },
  {
    name: "mala-upa.jpg",
    width: 700,
    height: 460,
    caption: "Malá Úpa"
  },
  {
    name: "doubrava.jpg",
    width: 700,
    height: 467,
    caption: "Doubrava"
  },
  {
    name: "obri-dul.jpg",
    width: 700,
    height: 692,
    caption: "Obří důl"
  },
  {
    name: "orlicke-hory.jpg",
    width: 700,
    height: 576,
    caption: "Orlické hory"
  },
  {
    name: "tani.jpg",
    width: 700,
    height: 695,
    caption: "Tání"
  },{
    name: "divoka-sarka.jpg",
    width: 591,
    height: 700,
    caption: "Divoká Šárka"
  },
  {
    name: "doubrava-2.jpg",
    width: 584,
    height: 700,
    caption: "Doubrava"
  },
  {
    name: "jeleni-bucina.jpg",
    width: 570,
    height: 700,
    caption: "Jelení bučina"
  },
  {
    name: "obolce.jpg",
    width: 700,
    height: 694,
    caption: "Obolce"
  },
  {
    name: "pred-oboleckym-lesem.jpg",
    width: 700,
    height: 690,
    caption: "Před Oboleckým lesem"
  },
  {
    name: "svitavske-vrby.jpg",
    width: 506,
    height: 700,
    caption: "Svitavské vrby"
  },
]

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
    console.log(imagesForGallery);
    return (
      <Layout title="Portfolio">
        <Gallery photos={imagesForGallery} onClick={this.openLightbox} />
        <Lightbox images={imagesForLightbox}
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
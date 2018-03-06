import Layout from '../components/layout'
import Gallery from 'react-grid-gallery'

const images = [
  {
    src: "/static/pictures/buk.jpg",
    thumbnail: "/static/pictures/buk.jpg",
    thumbnailWidth: 3150,
    thumbnailHeight: 4085,
    caption: "Buk"
  },
  {
    src: "/static/pictures/velka-destna.jpg",
    thumbnail: "/static/pictures/velka-destna.jpg",
    thumbnailWidth: 4013,
    thumbnailHeight: 2994,
    caption: "Velká Deštná"
  },
  {
    src: "/static/pictures/kamenny-potok.jpg",
    thumbnail: "/static/pictures/kamenny-potok.jpg",
    thumbnailWidth: 2879,
    thumbnailHeight: 2884,
    caption: "Kamenný potok"
  },
  {
    src: "/static/pictures/lisejniky.jpg",
    thumbnail: "/static/pictures/lisejniky.jpg",
    thumbnailWidth: 3268,
    thumbnailHeight: 4516,
    caption: "Lišejníky"
  },
  {
    src: "/static/pictures/mala-upa.jpg",
    thumbnail: "/static/pictures/mala-upa.jpg",
    thumbnailWidth: 3962,
    thumbnailHeight: 2602,
    caption: "Malá Úpa"
  },
  {
    src: "/static/pictures/na-rosnicce.jpg",
    thumbnail: "/static/pictures/na-rosnicce.jpg",
    thumbnailWidth: 2800,
    thumbnailHeight: 3810,
    caption: "Na rosničce"
  },
  {
    src: "/static/pictures/obri-dul.jpg",
    thumbnail: "/static/pictures/obri-dul.jpg",
    thumbnailWidth: 2596,
    thumbnailHeight: 2565,
    caption: "Obří důl"
  },
  {
    src: "/static/pictures/orlicke-hory.jpg",
    thumbnail: "/static/pictures/orlicke-hory.jpg",
    thumbnailWidth: 3777,
    thumbnailHeight: 3110,
    caption: "Orlické hory"
  },
  {
    src: "/static/pictures/tani.jpg",
    thumbnail: "/static/pictures/tani.jpg",
    thumbnailWidth: 2966,
    thumbnailHeight: 2946,
    caption: "Tání"
  },{
    src: "/static/pictures/buk.jpg",
    thumbnail: "/static/pictures/buk.jpg",
    thumbnailWidth: 3150,
    thumbnailHeight: 4085,
    caption: "Buk"
  },
  {
    src: "/static/pictures/velka-destna.jpg",
    thumbnail: "/static/pictures/velka-destna.jpg",
    thumbnailWidth: 4013,
    thumbnailHeight: 2994,
    caption: "Velká Deštná"
  },
  {
    src: "/static/pictures/kamenny-potok.jpg",
    thumbnail: "/static/pictures/kamenny-potok.jpg",
    thumbnailWidth: 2879,
    thumbnailHeight: 2884,
    caption: "Kamenný potok"
  },
  {
    src: "/static/pictures/lisejniky.jpg",
    thumbnail: "/static/pictures/lisejniky.jpg",
    thumbnailWidth: 3268,
    thumbnailHeight: 4516,
    caption: "Lišejníky"
  },
  {
    src: "/static/pictures/mala-upa.jpg",
    thumbnail: "/static/pictures/mala-upa.jpg",
    thumbnailWidth: 3962,
    thumbnailHeight: 2602,
    caption: "Malá Úpa"
  },
  {
    src: "/static/pictures/na-rosnicce.jpg",
    thumbnail: "/static/pictures/na-rosnicce.jpg",
    thumbnailWidth: 2800,
    thumbnailHeight: 3810,
    caption: "Na rosničce"
  },
  {
    src: "/static/pictures/obri-dul.jpg",
    thumbnail: "/static/pictures/obri-dul.jpg",
    thumbnailWidth: 2596,
    thumbnailHeight: 2565,
    caption: "Obří důl"
  },
  {
    src: "/static/pictures/orlicke-hory.jpg",
    thumbnail: "/static/pictures/orlicke-hory.jpg",
    thumbnailWidth: 3777,
    thumbnailHeight: 3110,
    caption: "Orlické hory"
  },
  {
    src: "/static/pictures/tani.jpg",
    thumbnail: "/static/pictures/tani.jpg",
    thumbnailWidth: 2966,
    thumbnailHeight: 2946,
    caption: "Tání"
  },
]

export default () => (
  <Layout title="Portfolio">
    <Gallery
      images={images}
      enableImageSelection={false}
      rowHeight={350}
      />
    <style jsx global>{`
      .outer {
        background: #ffffff;
      }
    `}</style>
  </Layout>
)
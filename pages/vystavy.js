import Layout from '../components/layout'
import allExhibitions from '../data/exhibitions.json'

const postersPath = "../static/posters/"

const groupedExhibitions = (() => {
  const planned = []
  const current = []
  const online = []
  const pastGroup = []
  const pastSolo = []
  const pastOnline = []

  const today = new Date();
  allExhibitions.forEach(exhibition => {
    const startDate = new Date(exhibition.startDate);
    const endDate = new Date(exhibition.endDate);
    
    if (endDate > today && exhibition.type == "online") online.push(exhibition)
    else if (startDate > today) planned.push(exhibition)
    else if (endDate > today || !(exhibition.startDate || exhibition.endDate)) current.push(exhibition)
    else if (exhibition.type == "group") pastGroup.push(exhibition)
    else if (exhibition.type == "online") pastOnline.push(exhibition)
    else pastSolo.push(exhibition)
  });

  return { planned, current, online, pastSolo, pastGroup, pastOnline };
})();

const FeaturedExhibitionsGroup = (title, exhibitions) => (
  exhibitions.length > 0 && (
    <div>
      <h2>{title}</h2>
      {exhibitions.map(FeaturedExhibition)}
    </div>
  )
)

const FeaturedExhibition = ({ title, place, detailedPlace, dateNote, startDate, endDate, link, linkTitle, poster, posterTitle }) => (
  <div key={title}>
    <p>
      <h3>{title}</h3><br />
      {detailedPlace && <pre>{detailedPlace}</pre> || place}
      {dateNote && <React.Fragment><br /><pre className="date-note">{dateNote}</pre></React.Fragment>}
      {!dateNote && startDate && endDate && <React.Fragment><br />{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</React.Fragment>}
      {link && <React.Fragment><br /><a href={link} title={linkTitle}>{link}</a></React.Fragment>}
    </p>
    {poster && <img src={postersPath + poster} title={posterTitle} />}
    <style jsx>{`
      a {
        color: rgb(70,70,70);
        overflow-wrap: break-word;
      }
      img {
        width: 50vw;
        min-width: 300px;
        max-height: 90vh;
        object-fit: contain;
        display: flex;
        margin: 25px auto 50px;
      }

      pre {
        margin-top: 0.5em;
      }
      .date-note {
        color: #f00;
      }

      @media only screen and (min-width: 750px) {
        img {
          position: initial;
        }
      }
    `}</style>
  </div>
)

const PastExhibitionsGroup = (title, exhibitions) => (
  exhibitions.length > 0 && (
    <div>
      <h2>{title}</h2>
      <table>
        <tbody>{exhibitions.map(PastExhibition)}</tbody>
      </table>
      <style jsx>{`
        table { width: 100%; }
      `}</style>
    </div>
  )
)

const PastExhibition = ({ title, place, startDate, note }) => [
  <tr key={title}>
    <th>{new Date(startDate).getFullYear()}</th>
    <td>{withNonBreakingCharacters(title)}{place && `, ${withNonBreakingCharacters(place)}`}</td>
    <style jsx>{`
      th {
        min-width: 60px;
        width: 5%;
        vertical-align: top;
        text-align: left;
        font-weight: normal;
      }
    `}</style>
  </tr>,
  note && <tr key={title + "-note"}><th></th><td>{note}</td></tr>
]

const withNonBreakingCharacters = text => text.replace(" ", "\u00A0").replace("-", "\u2011");

const Exhibitions = () => <Layout>
  {FeaturedExhibitionsGroup("Aktuální", groupedExhibitions.current)}
  {FeaturedExhibitionsGroup("Plánované", groupedExhibitions.planned)}
  {FeaturedExhibitionsGroup("Online", groupedExhibitions.online)}
  {PastExhibitionsGroup("Samostatné výstavy", groupedExhibitions.pastSolo)}
  {PastExhibitionsGroup("Skupinové výstavy", groupedExhibitions.pastGroup)}
  {PastExhibitionsGroup("Online výstavy", groupedExhibitions.pastOnline)}
</Layout>;

export default Exhibitions;
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <Layout>
    <img src="/static/images/ivana.jpg" width="300" />
    <p className="born">*14. 5. 1995 Havlíčkův Brod</p>
    <p>Obraz poskytuje jedinečnou možnost vyjádření, podává výpovědi o samotném
autorovi i námětu, který zobrazuje a hraje významnou roli v mezilidské
komunikaci a vzájemném sdílení. Barvy nahrazují slova a pomáhají nám
pojmout, poznat a procítit ten neuchopitelný svět kolem nás i v nás.
Když člověk navštíví nějakou oblast, neodnáší si pouze vizuální vzpomínku
na to, co viděl, ale prožitek a specifičnost místa se do něj zapíše na několika
dalších rovinách, přičemž ovlivní a prohloubí jeho vnímání. Naše těla i ostatní
živé formy se tvoří ve vzájemné propojenosti se Zemí, a tudíž jsou podmíněny
jejím zákonitostem. Její procesy formují a ovlivňují naše bytí, stejně jako i my
utváříme podobu přírody. Touha poznat a spatřit spletitost a celistvost těchto
forem je základním puzení tvorby.</p>
    <h2>Studium</h2>
    <table>
      <tbody>
        <tr>
          <th>2014-dosud</th>
          <td>
            Akademie výtvarných umění<br />
            Ateliér Malba III prof. Michaela Rittsteina / Ateliér Malba IV prof. Martina Mainera
          </td>
        </tr>
        <tr>
          <th>2010-2014</th>
          <td>Střední umělecká škola Jihlava / Obor Grafický design</td>
        </tr>
      </tbody>
    </table>
    <h2>Kontakt</h2>
    <a href="mailto:i-mrazkova@seznam.cz"><span className="icon"><FontAwesomeIcon icon={faEnvelope} size="2x" fixedWidth/></span>i-mrazkova@seznam.cz</a><br/>
    <a href="callto:00420735849747"><span className="icon"><FontAwesomeIcon icon={faMobileAlt} size="2x" fixedWidth/></span>+420 735 849 747</a><br/>
    <a href="https://www.facebook.com/Ivana-Mrázková-2058171554193695"><span className="icon"><FontAwesomeIcon icon={faFacebookSquare} size="2x" fixedWidth/></span>Ivana Mrázková</a><br/>
    <a href="https://www.instagram.com/ivana.mrazkova/"><span className="icon"><FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth/></span>ivana.mrazkova</a><br/>
    <style jsx>{`
      img {
        display: block;
        margin: 0 auto 25px auto;
        max-width: 100%;
      }
      th {
        min-width: 80px;
        width: 20%;
        vertical-align: top;
        text-align: left;
        font-weight: normal;
      }

      a {
        display: inline-block;
        margin-bottom: 15px;
        color: #000;
        text-decoration: none;
      }

      a .icon {
        vertical-align: -0.25em;
        margin-right: 0.25em;
      }

      @media only screen and (min-width: 750px) {
        img {
          float: left;
          margin: 0 40px 60px 0;
        }

        .born {
          margin-top: 25px;
        }
      }
    `}</style>
  </Layout>
)
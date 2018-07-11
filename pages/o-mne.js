import Layout from '../components/layout'

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
            Ateliér Malba III prof. Michaele Rittsteina / Ateliér Malba IV prof. Martina Mainera
          </td>
        </tr>
        <tr>
          <th>2010-2014</th>
          <td>Střední umělecká škola Jihlava / Obor Grafický design</td>
        </tr>
      </tbody>
    </table>
    <h2>Kontakt</h2>
    <a href="mailto:i-mrazkova@seznam.cz">i-mrazkova@seznam.cz</a>
    <a href="callto:00420723849747">+420 723 849 747</a>
    <style jsx>{`
      img {
        display: block;
        margin: 0 auto 25px auto;
        max-width: 100%;
        filter: grayscale(100%);
      }
      th {
        min-width: 80px;
        width: 20%;
        vertical-align: top;
        text-align: left;
        font-weight: normal;
      }

      a {
        display: block;
        margin-bottom: 15px;
        color: #000;
        text-decoration: none;
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
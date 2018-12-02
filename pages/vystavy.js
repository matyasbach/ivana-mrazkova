import Layout from '../components/layout'

export default () => (
  <Layout>
    <h2>Aktuální</h2>
    <p>
      KRAJINA<br />
      JazyGo, Praha<br />
      3. 12. - 20. 12. 2018<br/><br />
      <a href="https://www.facebook.com/events/365746930862813" title="Krajina 2018" alt="Krajina 2018">
        https://www.facebook.com/events/365746930862813
      </a>
    </p>
    <img src="../static/posters/krajina-jazygo-praha-2018.jpg"></img>

    <p>
      MÁNES MÁNESU 2018<br />
      Galerie Špejchar, Chomutov<br />
      9. 11. - 8. 12. 2018<br/><br />
      <a href="https://www.skks.cz/kultura/kulturni-akce/icalrepeat.detail/2018/11/09/441/-/manes-manesu-2018" title="Mánes Mánesu 2018" alt="Mánes Mánesu 2018">
        https://www.skks.cz/kultura/kulturni-akce/icalrepeat.detail/2018/11/09/441/-/manes-manesu-2018
      </a>
    </p>
    <img src="../static/posters/manes-manesu-spejchar-chomutov-2018.png"></img>

    <h2>Plánované</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Výstava na Ministersvu zemědělství, Praha<br />8. 1. 2019 od 15 hod</td></tr>
        <tr><th>            2019</th><td>Výstava v Galerii České spořitelny, Praha<br/>17. 1. 2019 až 31. 3. 2019</td></tr>
        <tr><th>            2019</th><td>Výstava v Komunitním centru Háta, Ledeč nad Sázavou<br/>od 21. 2. 2019</td></tr>
      </tbody>
    </table>

    <h2>Samostatné výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2018</th><td>Tam a zpět, Galerie Thambos, Plzeň</td></tr>
        <tr><th>            2017</th><td>Lesem Proudem, Dobrá Trafika</td></tr>
      </tbody>
    </table>

    <h2>Skupinové výstavy</h2>
    <table>
      <tbody>
        <tr><th rowSpan="2">2018</th><td>Rozbřesk - současná krajinomalba</td></tr>
        <tr><td>                         Východočeská galerie v Pardubicích</td></tr>
        <tr><th>            2018</th><td>Art Prague, Clam-Gallasův palác, Praha</td></tr>
        <tr><th>            2018</th><td>Členská výstava S. V. U. Mánes, Galerie Diamant</td></tr>
        <tr><th>            2017</th><td>Světlo v obraz: český impresionismus, Jízdárna Pražského hradu</td></tr>
        <tr><th>            2017</th><td>ATRIBUT, Galerie J°CEJKA, Praha</td></tr>
        <tr><th>            2017</th><td>Design piknik, Počátky</td></tr>
        <tr><th rowSpan="2">2017</th><td>Malíři současnosti - Sochaři minulosti, Galerie Diamant</td></tr>
        <tr><td>                         Výstava ke 130. výročí založení spolku S.V.U. Mánes</td></tr>
        <tr><th>            2017</th><td>Krajina 2017, Nová galerie</td></tr>
        <tr><th>            2016</th><td>Pokoje, Ateliérová výstava Malby 3</td></tr>
        <tr><th rowSpan="2">2015</th><td>Těsně vedle, Ateliérová výstava Malby 3</td></tr>
        <tr><td>                         Galerie Josefa Lieslera v Kadani</td></tr>
        <tr><th>            2015</th><td>Cafe Decada v Praze společně s Terezou Zichovou</td></tr>
        <tr><th>            2015</th><td>PETROHRADSKÁ Opening season #159!</td></tr>
      </tbody>
    </table>
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
        margin: 50px auto;
      }
      table {
        width: 100%;
      }
      th {
        min-width: 60px;
        width: 5%;
        vertical-align: top;
        text-align: left;
        font-weight: normal;
      }

      @media only screen and (min-width: 750px) {
        img {
          position: initial;
        }
      }
    `}</style>
  </Layout>
)
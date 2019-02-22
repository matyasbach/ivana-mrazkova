import Layout from '../components/layout'

export default () => (
  <Layout>
    <h2>Aktuální</h2>
    <p>
      Lesem i vodou<br />
      KC Háta, Ledeč nad Sázavou<br />
      21. 2. - 22. 3. 2019<br /><br />
    </p>
    <img src="../static/posters/lesem-i-vodou-kc-hata-ledec-2019.jpg" alt="Pozvánka na výstavu Lesem i vodou 2019"></img>

    <p>
      Pohled do krajiny<br />
      Galerie České spořitelny, Praha<br />
      17. 1. - 31. 3. 2019<br/><br />
      <a href="https://www.facebook.com/events/218410899099358/" title="Pohled do krajiny 2019">
        https://www.facebook.com/events/218410899099358/
      </a>
    </p>
    <img src="../static/posters/pohled-do-krajiny-gcs-2019.jpg" alt="Pozvánka na výstavu Pohled do krajiny 2019"></img>

    <h2>Plánované</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Festival Polabský Montmartre, Brandýs nad Labem</td></tr>
      </tbody>
    </table>

    <h2>Samostatné výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Lesem i vodou, Komunitní centrum Háta, Ledeč nad Sázavou</td></tr>
        <tr><th>            2019</th><td>Putování krajinou, Ministertvo zemědělství, Praha</td></tr>
        <tr><th>            2018</th><td>Krajina, JazyGo, Praha</td></tr>
        <tr><th>            2018</th><td>Tam a zpět, Galerie Thambos, Plzeň</td></tr>
        <tr><th>            2018</th><td>Náruč lesa, Ministertvo zemědělství, Praha</td></tr>
        <tr><th>            2017</th><td>Lesem Proudem, Dobrá Trafika</td></tr>
      </tbody>
    </table>

    <h2>Skupinové výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Pohled do krajiny, Galerie České spořitelny, Praha</td></tr>
        <tr><th>            2018</th><td>Mánes Mánesu, Galerie Špejchar, Chomutov</td></tr>
        <tr><th rowSpan="2">2018</th><td>Rozbřesk - současná krajinomalba</td></tr>
        <tr><td>                         Východočeská galerie v Pardubicích</td></tr>
        <tr><th>            2018</th><td>Art Prague, Clam-Gallasův palác, Praha</td></tr>
        <tr><th>            2018</th><td>Členská výstava S. V. U. Mánes, Galerie Diamant</td></tr>
        <tr><th>            2017</th><td>Světlo v obraze: český impresionismus, Jízdárna Pražského hradu</td></tr>
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
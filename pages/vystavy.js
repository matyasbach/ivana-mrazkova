import Layout from '../components/layout'

export default () => (
  <Layout>
    <h2>Aktuální</h2>

    <p>
      V kapce vody<br />
      Galerie na Miladě, Praha<br />
      28. 11. 2019 - 17. 1. 2020<br /><br />
      <a href="https://www.praha7.cz/ivana-mrazkova-v-kapce-vody/" title="Praha 7 - Galerie na Miladě">
        https://www.praha7.cz/ivana-mrazkova-v-kapce-vody/
      </a>
    </p>
    <img src="../static/posters/v-kapce-vody-galerie-na-milade-praha-2019.png" title="Pozvánka na výstavu V kapce vody" />

    <p>
      Dialogy<br />
      Galerie Kooperativy, Praha<br />
      25. 10. - 2. 2. 2020<br /><br />
      <a href="https://www.koop.cz/pojistovna-kooperativa/galerie-kooperativy" title="Galerie Kooperativy">
        https://www.koop.cz/pojistovna-kooperativa/galerie-kooperativy
      </a>
    </p>
    <img src="../static/posters/dialogy-kooperativa-praha-2019.png" alt="Pozvánka na výstavu Dialogy 2019"></img>

    <p>
      Malba III<br />
      Galerie Millenium, Praha<br />
      20. 11. 2019 - 5. 1. 2020<br /><br />
      <a href="http://www.gallerymillennium.cz/soucasna_vystava.html" title="Galerie Millenium">
        http://www.gallerymillennium.cz/soucasna_vystava.html
      </a>
    </p>
    <img src="../static/posters/malba-III-praha-2019.jpg" alt="Plakát k výstavě Malba III"></img>

    <h2>Samostatné výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Po proudu, Art Café, Liberec</td></tr>
        <tr><th>            2019</th><td>Lesem i vodou, Komunitní&nbsp;centrum&nbsp;Háta, Ledeč&nbsp;nad&nbsp;Sázavou</td></tr>
        <tr><th>            2019</th><td>Putování krajinou, Ministerstvo&nbsp;zemědělství, Praha</td></tr>
        <tr><th>            2018</th><td>Krajina, JazyGo, Praha</td></tr>
        <tr><th>            2018</th><td>Tam a zpět, Galerie&nbsp;Thambos, Plzeň</td></tr>
        <tr><th>            2018</th><td>Náruč lesa, Ministerstvo&nbsp;zemědělství, Praha</td></tr>
        <tr><th>            2017</th><td>Lesem Proudem, Dobrá&nbsp;Trafika, Praha</td></tr>
      </tbody>
    </table>

    <h2>Skupinové výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Spectators Disease, Polansky&nbsp;Gallery/Holešovická&nbsp;šachta, Praha</td></tr>
        <tr><th>            2019</th><td>Generace, Galerie&nbsp;Kooperativy, Praha</td></tr>
        <tr><th>            2019</th><td>Pohled do krajiny, Galerie&nbsp;České&nbsp;spořitelny, Praha</td></tr>
        <tr><th>            2018</th><td>Mánes Mánesu, Galerie&nbsp;Špejchar, Chomutov</td></tr>
        <tr><th rowSpan="2">2018</th><td>Rozbřesk - současná krajinomalba</td></tr>
        <tr><td>                         Východočeská galerie v&nbsp;Pardubicích</td></tr>
        <tr><th>            2018</th><td>Art Prague, Clam&#8209;Gallasův palác, Praha</td></tr>
        <tr><th>            2018</th><td>Členská výstava S.V.U.&nbsp;Mánes, Galerie&nbsp;Diamant</td></tr>
        <tr><th>            2017</th><td>Světlo v obraze: český&nbsp;impresionismus, Jízdárna&nbsp;Pražského&nbsp;hradu</td></tr>
        <tr><th>            2017</th><td>ATRIBUT, Galerie&nbsp;J°CEJKA, Praha</td></tr>
        <tr><th>            2017</th><td>Design piknik, Počátky</td></tr>
        <tr><th rowSpan="2">2017</th><td>Malíři současnosti - Sochaři minulosti, Galerie&nbsp;Diamant</td></tr>
        <tr><td>                         Výstava ke 130. výročí založení spolku S.V.U.&nbsp;Mánes</td></tr>
        <tr><th>            2017</th><td>Krajina 2017, Nová&nbsp;galerie</td></tr>
        <tr><th>            2016</th><td>Pokoje, Ateliérová výstava Malby&nbsp;3</td></tr>
        <tr><th rowSpan="2">2015</th><td>Těsně vedle, Ateliérová výstava Malby&nbsp;3</td></tr>
        <tr><td>                         Galerie Josefa Lieslera v&nbsp;Kadani</td></tr>
        <tr><th>            2015</th><td>Cafe Decada v&nbsp;Praze společně s&nbsp;Terezou Zichovou</td></tr>
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
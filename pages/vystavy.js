import Layout from '../components/layout'

export default () => (
  <Layout>
    <h2>Aktuální</h2>

    <p>
      Po proudu<br />
      Art Café Liberec<br />
      28. 6. - 31. 8. 2019<br /><br />
      <a href="https://www.facebook.com/events/346906415995674/" title="Po proudu - událost na Facebooku">
        https://www.facebook.com/events/346906415995674/
      </a>
    </p>
    <img src="../static/posters/po-proudu-art-cafe-liberec-2019.jpg" alt="Pozvánka na výstavu v Art Café Liberec"></img>

    <p>
      Generace<br />
      Galerie Kooperativy, Praha<br />
      26. 4. - 23. 8. 2019<br /><br />
      <a href="http://www.svumanes.cz/aktuality/item/265-pripravujeme-vystavu-generace" title="S.V.Ú. Mánes - Připravujeme výstavu Generace Mánesa">
        http://www.svumanes.cz/aktuality/item/265-pripravujeme-vystavu-generace
      </a>
    </p>
    <img src="../static/posters/generace-kooperativa-praha-2019.png" alt="Pozvánka na výstavu Generace 2019"></img>

    <h2>Samostatné výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2019</th><td>Lesem i vodou, Komunitní centrum Háta, Ledeč nad Sázavou</td></tr>
        <tr><th>            2019</th><td>Putování krajinou, Ministerstvo zemědělství, Praha</td></tr>
        <tr><th>            2018</th><td>Krajina, JazyGo, Praha</td></tr>
        <tr><th>            2018</th><td>Tam a zpět, Galerie Thambos, Plzeň</td></tr>
        <tr><th>            2018</th><td>Náruč lesa, Ministerstvo zemědělství, Praha</td></tr>
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
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h2>Samostatné výstavy</h2>
    <table>
      <tbody>
        <tr><th>            2017</th><td>Lesem Proudem Dobrá Trafika</td></tr>
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
        <tr><th>            2017</th><td>Krajina 2017 Nová galerie</td></tr>
        <tr><th>            2016</th><td>Pokoje Ateliérová výstava Malby 3</td></tr>
        <tr><th rowSpan="2">2015</th><td>Těsně vedle Ateliérová výstava Malby 3</td></tr>
        <tr><td>                         Galerie Josefa Lieslera v Kadani</td></tr>
        <tr><th>            2015</th><td>Cafe Decada v Praze společně s Terezou Zichovou</td></tr>
        <tr><th>            2015</th><td>PETROHRADSKÁ Opening season #159!</td></tr>
      </tbody>
    </table>
    <style jsx>{`
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
    `}</style>
  </Layout>
)
class GeneralContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx global>{`
          .content p, .content h2, .content h3 {
            margin-bottom: 25px;
          }
          .content h2 {
            margin-top: 50px;
            text-transform: uppercase;
            font-family: 'AgencyFB', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-weight: normal;
            font-size: 130%;
            clear: both;
          }
          .content p {
            text-align: justify;
          }
        `}</style>
        <style jsx>{`
          div {
            margin: auto;
            padding: 25px 25px 50px;
            max-width: 1024px;
          }
          @media only screen and (min-width: 750px) {
            div {
              padding: 80px 50px 160px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default GeneralContent
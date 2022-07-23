import Container from 'components/Container/Container';
import './CardItem.scss';

// const CardItem = (content:any, header:any, imgUrl:any) => {
const CardItem = ({ data }: any) => {
  const { imgUrl, header, content, isReverse } = data;
  let site;

  if (isReverse) {
    site = "right"
  } else {
    site = "left"
  }

  return (
    <Container>
      <div className={`feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone ${isReverse && 'reverse'}`}>
        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
          <div className="card">
            <img src={imgUrl} alt="" />
          </div>
        </div>

        <div className={`ipsGrid_span7 ipsType_${site} padding`}>
          <h2 className="heading_large gs_reveal">{header}</h2>
          <p className="gs_reveal">{content}</p>
        </div>
      </div>
    </Container>
  )
}

export default CardItem
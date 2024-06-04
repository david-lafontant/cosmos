import { Link } from "react-router-dom";
type CardData = {
  image: string;
  name: string;
}

type Data = {
  data: CardData
}

const Card = ({ data }: Data) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.name} className="cardImage" />
      <div className="container">
        <h4><b>{data.name}</b></h4>

        <Link to={'astra/' + data.name}>
          <button>More Details ...</button>
        </Link>
      </div>
    </div>);
}

export default Card;
import { Link } from "react-router-dom";
import { Apod } from '../../utils/types';

type Data = {
  data: Apod
}

const Card = ({ data }: Data) => {
  return (
    <div className="card">
      <img src={data.hdurl} alt={data.title} className="cardImage" />
      <div className="container">
        <h4><b>{data.title}</b></h4>

        <Link to={'astra/' + data.title}>
          <button>More Details ...</button>
        </Link>
      </div>
    </div>);
}

export default Card;
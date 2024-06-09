import { Link } from "react-router-dom";
import { Apod } from '../../utils/types';

type Data = {
  data: Apod
}

const Card = ({ data }: Data) => {
  return (
        <div>
         <Link to={'/astra/' + data.title}>
            <img src={data.hdurl} alt={data.title} className="cardImage" />
          </Link>
      </div>

  );
}

export default Card;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetApodsQuery } from '../../services/apods';
import { Apod } from "../../utils/types";

const Astra = () => {
  const { slug } = useParams();
  const { data } = (useGetApodsQuery(''));
  const [astra, setAstra] = useState({} as Apod)

  useEffect(() => {
    if (data) {
      const filtered = data.filter((item: Apod) => item.title === slug);
      setAstra(astra => ({ ...astra, ...filtered[0] }))
    }
  }, [data, slug]);


  return (
    <main className="astra">
      <figure>
        <img src={astra.hdurl} alt={astra.title} />
        <figcaption>
          {astra.title}
        </figcaption>
      </figure>

    </main>
  );
}

export default Astra;
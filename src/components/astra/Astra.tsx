

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arr from "../../utils/card";

type CardData = {
  image: string;
  name: string;
}

const Astra = () => {
  const { slug } = useParams();
  const [data, setData] = useState({} as CardData)
  useEffect(() => {
    if (slug) {
      console.log(slug)
      const filtered = arr.filter((item) => item.name === slug);
      console.log(filtered[0])
      setData(data => ({ ...data, ...filtered[0] }))
    }
  }, [slug]);
  return (
    <main className="astra">

      <figure>
        <img src={data.image} alt={data.name} />
        <figcaption>
          {data.name}
        </figcaption>
      </figure>

    </main>
  );
}

export default Astra;
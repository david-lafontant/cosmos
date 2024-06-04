import arr from "../../utils/card";

import { useGetTodayApodQuery } from '../../services/apod';
import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";


const Home = () => {
  const { data, error, isLoading } = useGetTodayApodQuery('');

  return (
    <main className="pages">





      <section className="banner">
        <h1>Welcome to Cosmos</h1>
      </section>

      {error ? (
        <h1>Oh no, there was an error</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        <article>
          <p>************************</p>
          <br />
          <Hero data={data} />

        </article>
      ) : null}
      <section className="cards">
        {arr && arr.length > 0 ? arr.map((elem, index) => <Card key={index} data={elem} />) : null}
      </section>

    </main>
  );
}

export default Home;
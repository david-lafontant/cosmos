
import {  useGetTodayApodQuery } from '../../services/apods';
import Hero from "../../components/hero/Hero";


const Home = () => {
  const { data, error, isLoading } = useGetTodayApodQuery();

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
        <Hero data={data} />
      ) : null}


    </main>
  );
}

export default Home;

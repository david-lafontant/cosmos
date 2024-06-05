
import { useGetTodayApodQuery } from '../../services/apod';
import { useGetApodsQuery } from '../../services/apods';
import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";
import { Apod } from '../../utils/types';

const Home = () => {
  const { data, error, isLoading } = useGetTodayApodQuery('');
  const { data: apods, error: apodsError, isLoading: apodsIsLoading } = (useGetApodsQuery(''));
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

      {apodsError ? (
        <h1>Oh no, there was an error</h1>
      ) : apodsIsLoading ? (
        <h1>Loading...</h1>
      ) : apods ? (
        <section className="cards">
          {apods.map((elem: Apod, index: number) => <Card key={index} data={elem} />)}
        </section>
      ) : null}
    </main>
  );
}

export default Home;
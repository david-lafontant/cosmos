import { useGetApodsQuery } from '../../services/apods';
import Card from "../../components/card/Card";
import { Apod } from '../../utils/types';

const Gallery = () => {
  const { data: apods, error: apodsError, isLoading: apodsIsLoading } = (useGetApodsQuery());
  return (
    <main className="pages">
      <h2> Gallery page</h2>
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

export default Gallery;
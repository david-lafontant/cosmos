
import Masonry from 'react-masonry-css';
import { useGetApodsQuery } from '../../services/apods';
import Card from "../../components/card/Card";
import { Apod } from '../../utils/types';

const Gallery = () => {
  const { data: apods, error: apodsError, isLoading: apodsIsLoading } = (useGetApodsQuery());
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1
  };
  return (
    <main className="pages">
      <h2> Gallery page</h2>
      {apodsError ? (
        <h1>Oh no, there was an error</h1>
      ) : apodsIsLoading ? (
        <h1>Loading...</h1>
      ) : apods ? (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
          {apods.map((elem: Apod, index: number) => <Card key={index} data={elem} />)}
        </Masonry>
      ) : null}
    </main>
  );
}

export default Gallery;
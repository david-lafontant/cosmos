import { Apod } from '../../utils/types';

type Data = {
  data: Apod
}


const Hero = ({ data }: Data) => {
  return (
    <section className="hero">
      <div className="container">
      <section className="banner">
        <h1>Welcome to Cosmos</h1>
        <h2>A NASA's Astronomy Picture of the Day API frontend</h2>
      </section>
        <img src={data.hdurl} alt={data.title} id="photo" />
      </div>
    </section>
  );
}

export default Hero;
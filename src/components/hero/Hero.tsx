import { Apod } from '../../utils/types';

type Data = {
  data: Apod
}


const Hero = ({ data }: Data) => {
  return (
    <section className="hero">
      <div className="container">
        <img src={data.hdurl} alt={data.title} id="photo" />
      </div>
    </section>
  );
}

export default Hero;
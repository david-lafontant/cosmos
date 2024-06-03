
type CardData = {
  image: string;
  name: string;
}

type Data = {
  data: CardData
}


const Hero = ({ data }: Data) => {
  return (
    <section className="hero">
      <div className="container">
        <img src={data.image} alt={data.name} id="photo" />
      </div>
    </section>
  )
}

export default Hero;
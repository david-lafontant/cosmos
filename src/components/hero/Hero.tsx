
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
      <img src={data.image} alt={data.name} />
    </section>
  )
}

export default Hero;
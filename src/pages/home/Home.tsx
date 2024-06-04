import arr from "../../utils/card";
import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";


const Home = () => {


  return (
    <main className="pages">
      <section className="banner">
        <h1>Welcome to Cosmos</h1>
      </section>
      {arr[0] ? <Hero data={arr[0]} /> : null}
      <section className="cards">
        {arr && arr.length > 0 ? arr.map((elem, index) => <Card key={index} data={elem} />) : null}
      </section>

    </main>
  );
}

export default Home;
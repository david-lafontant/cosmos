import arr from "../../utils/card";
import Card from "../../components/card/Card";


const Home = () => {


  return (
    <main className="pages">
      <section>

      </section>

      <section className="cards">
        {arr.map((elem, index) => <Card key={index} data={elem} />)}
      </section>

    </main>
  );
}

export default Home;
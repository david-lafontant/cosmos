import dummy1 from '../assets/images/dummy_01.jpg';
import dummy2 from '../assets/images/dummy_02.jpg';

type CardData = {
  image: string;
  name: string;
}

const arr: CardData[] = [];
for (let i = 0; i < 3; i++) {
  if (i % 2 === 0) {
    arr.push({ image: dummy1, name: "Nisi nostrud officia minim" });
    arr.push({ image: dummy2, name: "id et eiusmod eu sint ullamco" });

  } else {
    arr.push({ image: dummy2, name: "id et eiusmod eu sint ullamco" });
    arr.push({ image: dummy1, name: "Nisi nostrud officia minim" });
  }
}

export default arr;
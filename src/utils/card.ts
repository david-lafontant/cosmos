import dummy1 from '../assets/images/dummy_01.jpg';
import dummy2 from '../assets/images/dummy_02.jpg';

type CardData = {
  image: string;
  name: string;
}

const arr: CardData[] = [];
for (let i = 0; i < 4; i++) {
  if (i % 2 === 0) {
    arr.push({ image: dummy1, name: `Nisi_${i}` });
    arr.push({ image: dummy2, name: `eiusmod_${i}` });

  } else {
    arr.push({ image: dummy2, name: `eiusmod_${i}` });
    arr.push({ image: dummy1, name: `Nisi_${i}` });
  }
}

export default arr;
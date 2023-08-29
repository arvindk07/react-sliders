import SlickCarousel from "./components/SlickCarousel";

const dataTop = [
  {
    url: "https://vaya.in/wp-content/uploads/2021/01/Top-10-Ideas-to-Make-the-Road-Trips-More-Fun.jpg",
  },
  {
    url: "https://blog.londondrugs.com/wp-content/uploads/2016/07/bigstock-Happy-Young-Couple-Driving-Alo-98409830.jpg",
  },
  {
    url: "https://blog.londondrugs.com/wp-content/uploads/2016/07/bigstock-Happy-Young-Couple-Driving-Alo-98409830.jpg",
  },
  {
    url: "https://blog.londondrugs.com/wp-content/uploads/2016/07/bigstock-Happy-Young-Couple-Driving-Alo-98409830.jpg",
  },
  {
    url: "https://blog.londondrugs.com/wp-content/uploads/2016/07/bigstock-Happy-Young-Couple-Driving-Alo-98409830.jpg",
  },
];

const App = () => {
  return (
    <div>
      <SlickCarousel title="Weekend Trips" data={dataTop} />
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Главная страница </h1>
      <Link to={`/About`}>О нас</Link>
    </>
  );
}

export default Home;

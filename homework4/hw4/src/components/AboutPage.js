import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <h1>О нас</h1>
      <Link to={`/`}>Главная страница</Link>
    </>
  );
}

export default About;

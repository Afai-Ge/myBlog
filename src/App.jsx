import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Expertise from "./components/Expertise/Expertise";
import css from "./styles/app.module.scss";
const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
    </div>
  );
};

export default App;

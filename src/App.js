import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Menu/>

        <Content/>

        <Footer
            title="Stylus Shop"
            address="Budapest"
            phone="+36-30-123-4567"
            email="stylusshop@gmail.com"
        />
    </div>
  );
}

export default App;

import Header from './Header';
import MenuUtama from './Pages/MenuUtama';
import MenuProduct from './Pages/MenuProduct';
import MenuKontak from './Pages/MenuKontak';
import MenuTentangKami from './Pages/MenuTentangKami';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;

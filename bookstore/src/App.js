import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestReleases from './components/LatestRelease';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <LatestReleases />
      <MyFooter />
    </div>
  );
}

export default App;

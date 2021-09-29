import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestReleases from './components/LatestRelease';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <MyNav />
      <Welcome />
      <LatestReleases />
      <MyFooter />
    </Container>
  );
}

export default App;

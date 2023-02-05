import './App.css';
import Carousel from './components/Carousel';
import { imageData } from './components/CarouselData'

function App() {
  return <Carousel slides={imageData} />
}

export default App;

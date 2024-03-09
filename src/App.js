import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
 const images = Array.from({length: 10}, (_, index) => ({src: `https://picsum.photos/200/300?random=${index + 1}`, big: false}));

const [ChosenImage, setImage] = useState(images[0].src);

return (
  <div className='ImagesContainer'>
    <div className='ImagesCollection'>
      {images.map((data) => (
        <img
          className={ChosenImage === data.src ? 'ImageCollection selected' : 'ImageCollection'}
          src={data.src}
          onClick={() => {setImage(data.src)}}
        />
      ))}
    </div>
    <div>
      <img src={ChosenImage} className='ChosenImage' />
    </div>
  </div>
);
}

export default App;


import React,{useState} from 'react';
import './App.css';
import Image from './ChosenImage';
import Collection from './Collection'

function App() {
 const images = Array.from({length: 10}, (_, index) => ({src: `https://picsum.photos/200/300?random=${index + 1}`, big: false}));

const [ChosenImage, setImage] = useState(images[0].src);

return (
  <div className='ImagesContainer'>
    <div>
     <Collection images={images} ChosenImage={ChosenImage} setFunction = {setImage}/>
    </div>
    <div>
      <Image source={ChosenImage}/>
    </div>
  </div>
);
}

export default App;

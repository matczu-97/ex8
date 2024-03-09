import './App.css';

export function Collection({images,ChosenImage,setFunction})
{
return (
images.map((data) => (
    <img
      className={ChosenImage === data.src ? 'ImageCollection selected' : 'ImageCollection'}
      src={data.src}
      onClick={() => {setFunction(data.src)}}
    />
  ))
    )
}

export default Collection
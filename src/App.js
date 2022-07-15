import { useEffect, useState } from 'react';
import './App.css';
// import ImageCard from './Pages/ImageCard'
import ImageCard1 from './Pages/ImageCard1'
import ImageSearch from './Pages/ImageSearch';



function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <span><h3 className='text-center my-4 text-2xl bg-lime-200 sm:mx-96 rounded-xl py-5'> Search for Anything</h3></span>
      <span><h3 className='text-center my-4 text-sm sm:mx-96 rounded-xl py-1'> &#169; All rights reserved - Jahed Ahmed</h3></span>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="flex flex-wrap ">
        {images.map(image => (
          <ImageCard1 key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}


export default App;

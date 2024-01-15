import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}



function App(imgData) {
  // code here
  
  const images = imageData();
  console.log(images);
  
  return(
    <div>
  
      <h1>Kalvium Gallery</h1>

      <div id='grid'> 
          {images.map((element) => (
          <img src={element.img} id={element.id}/>
        
          ))};
      </div>
   
    </div>
 )

}

export default App;
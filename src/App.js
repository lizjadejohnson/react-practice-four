import './App.css';
import {useState} from 'react';
import photos from './models/photos';
import symbols from './models/symbols';
import Button from './components/Button';
import Card from './components/Card';
import MyCity from './components/MyCity';


function App() {
//-State and functions (above the return!)-//

  //useState: We have a state called count and a function that lets us change it called setCount
  //We set our starting state to 0
  let [count, setCount] = useState(0)

  //Another useState: We have a state called currentImage
  //and a function that lets us change it called setCurrentImage
  //We set our starting state to the value of photos[count]. This targets the index of a photo in photos.
  //The starting count was set in our last useState as 0 so this is 0 to start as well.
  let [currentImage, setCurrentImage] = useState(photos[count])
  // --[variable, functionToUpdateVariable] --- useState(defaultValueForVariable)

  //Set default loggedOn status to false:
  let [loggedOn, setLoggedOn] = useState(false)

  //Set default myCity status to null:
  let [myCity, setMyCity] = useState('')


  // Function to cycle forward through our array of pics:
  const changePic = () => {
    //Use the setCount function to change our count state. We change it to be 1 more.
    setCount(( count + 1));
    console.log("Current Count: ", count)
    
    //Use the setCurrentImage function to change our CurrentImage state.
    //We "change" it to continue to be set to the same as count. It needs re-establishing though.
    setCurrentImage(photos[count])
    console.log("Current Image: ", currentImage)
  };

  // Function to cycle backwards through our array of pics:
  //It is mostly the same as above but it reduces the number instead of increases.
  const reversePic = () => {
    setCount(( count - 1));
    console.log("Current Count: ", count)

    setCurrentImage(photos[count])
    console.log("Current Image: ", currentImage)
    
  };

    // Function to change loggedOn status:
  const toggleLogOn = () => {
    setLoggedOn(!loggedOn);
    console.log("Current loggedOn status: ", loggedOn)
    
  };



//---------------------------------------//
  return (
    <div className="App">
      <h1> City Directory </h1>

      {/* We display our card, we want the card to be whatever currentImage is set to above 
      so we pass in the currentImage as a prop to our card component to be displayed*/}
      <Card currentImg={currentImage}/>


      {/* Our button component takes an action and an icon */}
      <div className='btnContainer'>
        {/* So as props we pass our action reversePic (our function as defined above)
        and specify the icon we want */}
        <Button action={reversePic} icon={symbols.left}/>

        {/* As props we pass our action changePic (our function as defined above)
        and specify the icon we want */}
        <Button action={changePic} icon={symbols.right}/>
      </div>

      <div className='btnContainer'>
        <Button action={toggleLogOn} icon={loggedOn ? symbols.logout : symbols.login} />
      </div>

      <MyCity myCity={myCity} setMyCity={setMyCity} />
    </div>
  );
}

export default App;

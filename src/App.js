import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cat from './components/Cat';

const cats = [
  {
    name:"Мурзик",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiw5eOQvupJwyIlh-qO8_PUw24Y4QOQYg8g&usqp=CAU",
    text:"Miu"
  },
  {
    name:"Барсик",
    url:"https://www.sunny-cat.ru/datas/users/1-olnara007.jpg"
  },
  {
    name:"Лунтик",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYtJewuffJ_fR_hVmH5_X-JxCt0OLkagAQuXJAN2zGxA-z4kTpdtGkuiFmhQU85uwC0s&usqp=CAU"
  }
]

class App extends React.Component { // классовый компонент
  render() {
  return (
    <div className="App"> 
    {
      cats.map((cat) =>
      <Cat name={cat.name} url={cat.url} text={cat.text} ></Cat>
      )
    }
    </div>
    
  );
}
}
export default App;
//React.Fragment  - пишем вместо div, если нужно спрятать див б если он нам мешает
//<Cat></Cat>  - функция, импортирована с документа cat.jsx (там мы на писали код)

//import Cat from './Cat'; - обязательно сверху допечать импорт
/*<div className="App"> 
    <Cat name={cats[0].name} url={cats[0].url}></Cat>  обращаемся к массиву json сверху
    <Cat name="Барсик" url="https://www.sunny-cat.ru/datas/users/1-olnara007.jpg"></Cat> 
    <Cat name="Снежок"url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYtJewuffJ_fR_hVmH5_X-JxCt0OLkagAQuXJAN2zGxA-z4kTpdtGkuiFmhQU85uwC0s&usqp=CAU"></Cat> 
    </div>*/
// <Cat name={cat.name}></Cat> в {} пишутся переменные

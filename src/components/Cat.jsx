import React from 'react';
import'./Cat.scss';

import cat from '../assets/images/77.jpeg';

class Cat extends React.Component { 
  render(){
    const {name,url,text, isSelected} = this.props;
   return (
   
       <div className={"cat-card" + (isSelected? "selected":"")}>
         <img src={url}/>
         <div className="cat-name">{name}</div>
         <div className="cat-text"> Замечательный ласковый котик станет любимцем вашего дома</div>
         <div className="cat-text"> {text}</div>
         <div> <button className='button'>Взять домой</button></div>
         { isSelected ?
         <img src={cat} className='cat-image'/> :<></>}
         </div>
   );
  }}
  export default Cat;

  //function Cat(props) - props - возможность мносить разные данные (имена и тд)

// пример, если у нас классовый компонент, то к пропсам обращаемся через this

 /* function Cat(props) { // функциональный  компонент Cat
   
    return (
      <div className="App"> 
        <div className="cat-card">
          <img src={props.url}></img>
          <div className="cat-name">{props.name}</div>
          <div className="cat-text"> Замечательный ласковый котик станет любимцем вашего дома</div>
          <div className="cat-text"> {props.text}</div>
          <button >Взять домой</button>
          </div>
      </div>
      
    );
  }
  export default Cat;
  
<button style={{backgroundColor:'blue'}}>Взять домой</button> //css который не используем, только для тестироски
*/


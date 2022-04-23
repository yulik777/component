import'./Cat.css';

function Cat(props) { // отдельный  компонент Cat
   
    return (
      <div className="App"> 
        <div className="cat-card">
          <img src={props.url}></img>
          <div className="cat-name">{props.name}</div>
          <div className="cat-text"> Замечательный ласковый котик станет любимцем вашего дома</div>
          <div className="cat-text"> {props.text}</div>
          <button>Взять домой</button>
          </div>
      </div>
      
    );
  }
  
  export default Cat;

  //function Cat(props) - props - возможность мносить разные данные (имена и тд)

// пример, если у нас классовый компонент, то к пропсам обращаемся через this

/*class Cat extends React.Component { классовый  компонент Cat
   render(){
     const {name,url,text} = this.props;
    return (
      <div className="App"> 
        <div className="cat-card">
          <img src={url}></img>
          <div className="cat-name">{name}</div>
          <div className="cat-text"> Замечательный ласковый котик станет любимцем вашего дома</div>
          <div className="cat-text"> {text}</div>
          <button>Взять домой</button>
          </div>
      </div>
      
    );
  }}
  
  export default Cat;*/


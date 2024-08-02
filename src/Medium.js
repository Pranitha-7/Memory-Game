import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages=[
  { "src":"/img/a1.jpg",matched:false},
  { "src":"/img/a2.jpg",matched:false},
  { "src":"/img/a3.jpg",matched:false},
  { "src":"/img/a4.jpg",matched:false},
  { "src":"/img/a5.jpg",matched:false},
  { "src":"/img/a6.jpg",matched:false},
  { "src":"/img/a7.jpg",matched:false},
  { "src":"/img/a8.jpg",matched:false},
  { "src":"/img/a9.jpg",matched:false},
  { "src":"/img/a10.jpg",matched:false},
  { "src":"/img/a11.jpg",matched:false},
  { "src":"/img/a12.jpg",matched:false},
  { "src":"/img/a13.jpg",matched:false},
  { "src":"/img/a14.jpg",matched:false},
  { "src":"/img/a15.jpg",matched:false},
  { "src":"/img/a16.jpg",matched:false},
  { "src":"/img/a17.jpg",matched:false},
  { "src":"/img/a18.jpg",matched:false},
  
]

const Medium= () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)
const [disabled,setDisabled]=useState(false)
// shuffle cards
const shuffleCards = () => {
const shuffledCards = [...cardImages, ...cardImages]
.sort(() => Math.random() - 0.5)
.map((card) => ({ ...card, id: Math.random() }))
setChoiceOne(null)
setChoiceTwo(null)

setCards(shuffledCards)
setTurns(0)
}
const handleChoice=(card)=>{
 choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

}
useEffect(()=>{
 
   if(choiceOne && choiceTwo){
    setDisabled(true)
    if(choiceOne.src===choiceTwo.src){
      setCards(prevCards=>{
        return prevCards.map(card=>{
          if(card.src===choiceOne.src){
            return {...card,matched:true}
          }
          else{
            return card
          }
        })
      })
      resetTurn()
    }
    else{
     
      setTimeout(()=>resetTurn(),1000)
    }
   }
},[choiceOne,choiceTwo])
console.log(cards)
const resetTurn=()=>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns=>prevTurns+1)
  setDisabled(false)
}

   useEffect(()=>{
           shuffleCards( )
   },[])



 
  return (
    
    <div className='buttons'>
        <button onClick={shuffleCards}>New Game</button>
        
        <div className="card-grids">
        {cards.map(card => (
               <SingleCard 
                key={card.id} 
                card={card}
                handleChoice={handleChoice}
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}
                />
       ))}
      </div>
      <p>Turns:{turns}</p>
      </div>

);
}

export default Medium;
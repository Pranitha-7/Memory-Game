import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages=[
  { "src":"/img/f1.jpg",matched:false},
  { "src":"/img/f2.jpg",matched:false},
  { "src":"/img/f3.jpg",matched:false},
  { "src":"/img/f4.jpg",matched:false},
  { "src":"/img/f5.jpg",matched:false},
  { "src":"/img/f6.jpg",matched:false},
  { "src":"/img/f7.jpg",matched:false},
  { "src":"/img/f8.jpg",matched:false}
]

const Easy = () => {
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
        
        <div className="card-grid">
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

export default Easy;

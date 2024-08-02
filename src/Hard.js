
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages=[
  { "src":"/img/c1.jpg",matched:false},
  { "src":"/img/c2.jpg",matched:false},
  { "src":"/img/c3.jpg",matched:false},
  { "src":"/img/c4.jpg",matched:false},
  { "src":"/img/c5.jpg",matched:false},
  { "src":"/img/c6.jpg",matched:false},
  { "src":"/img/c7.jpg",matched:false},
  { "src":"/img/c8.jpg",matched:false},
  { "src":"/img/c9.jpg",matched:false},
  { "src":"/img/c10.jpg",matched:false},
  { "src":"/img/c11.jpg",matched:false},
  { "src":"/img/c12.jpg",matched:false},
  { "src":"/img/c13.jpg",matched:false},
  { "src":"/img/c14.jpg",matched:false},
  { "src":"/img/c15.jpg",matched:false},
  { "src":"/img/c16.jpg",matched:false},
  { "src":"/img/c17.jpg",matched:false},
  { "src":"/img/c18.jpg",matched:false},
  { "src":"/img/c19.jpg",matched:false},
  { "src":"/img/c20.jpg",matched:false},
  { "src":"/img/c21.jpg",matched:false},
  { "src":"/img/c22.jpg",matched:false},
  { "src":"/img/c23.jpg",matched:false},
  { "src":"/img/c24.jpg",matched:false},
  { "src":"/img/c25.jpg",matched:false},
  { "src":"/img/c26.jpg",matched:false},
  { "src":"/img/c27.jpg",matched:false},
  { "src":"/img/c28.jpg",matched:false},
  { "src":"/img/c29.jpg",matched:false},
  { "src":"/img/c30.jpg",matched:false},
  { "src":"/img/c31.jpg",matched:false},
  { "src":"/img/c32.jpg",matched:false},
]

const Hard= () => {
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
        
        <div className="card-gridss">
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

export default Hard;
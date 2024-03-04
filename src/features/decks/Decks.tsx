import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
      <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus eos, explicabo fugiat harum illo iste nam nesciunt nihil omnis optio quam qui quisquam quod rem repellendus saepe sapiente voluptatum.</footer>
    </div>
  )
}

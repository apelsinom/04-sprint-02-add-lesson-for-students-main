import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()

  return (
    <>
      {/*decks.length===0 означает, что наш Skeleton будет показываться только при перво загрузке, когда дляна массива с колодами равна 0*/}
      {isLoading && decks.length===0 && <Skeleton height={120} count={10} style={{marginBottom: '10px'}}/>}
      <ul className={s.list}>
        {/*или красивая компонета, похожая на карточки, сделанная с использванием нескольких Skeleton*/}
        {/*{isLoading && decks.length===0 && <DeckItemSkeleton count={10}/>}*/}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>
  )
}

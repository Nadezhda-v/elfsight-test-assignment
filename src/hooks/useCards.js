import { useSelector } from 'react-redux';

const useCards = () => {
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.cards.loading);
  const pages = useSelector((state) => state.cards.pages);
  const nextPage = useSelector((state) => state.cards.next);
  const prevPage = useSelector((state) => state.cards.prev);
  const error = useSelector((state) => state.cards.error);

  return { cards, loading, pages, nextPage, prevPage, error };
};

export default useCards;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cardRequestAsync } from '../store/card/cardAction';

const useCard = (id) => {
  const card = useSelector((state) => state.card.card);
  const status = useSelector((state) => state.card.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardRequestAsync(id));
  }, []);

  return { card, status };
};

export default useCard;

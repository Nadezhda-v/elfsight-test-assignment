import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useCard from '../../hooks/useCard';
import { ReactComponent as CloseIcon } from './img/close.svg';
import { Preloader } from '../../UI/Preloader/Preloader';
import { Content } from './Content/Content';
import { StyledButtonClose } from '../../styles/base/button';
import { StyledModal, StyledOverlay } from '../../styles/blocks/modal';
import { theme } from '../../styles/theme';

export const Modal = () => {
  const { id } = useParams();
  const { card, status } = useCard(id);
  const overlayRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClose = () => {
    navigate('/');
  };

  const handleCloseOverlay = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      handleButtonClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseOverlay);
    document.addEventListener('keydown', handleCloseOverlay);

    return () => {
      document.removeEventListener('click', handleCloseOverlay);
      document.removeEventListener('keydown', handleCloseOverlay);
    };
  }, []);

  return ReactDOM.createPortal(
    <StyledOverlay ref={overlayRef}>
      <StyledModal>
        {status === 'loading' && (
          <Preloader color={theme.colors.preloader} size={40} />
        )}
        {status === 'error' && (
          <span>
            Возникла ошибка при загрузке фотографии
          </span>
        )}
        {status === 'loaded' && (
          <>
            <Content data={card} />

            <StyledButtonClose onClick={handleButtonClose}>
              <CloseIcon />
            </StyledButtonClose>
          </>
        )}
      </StyledModal>
    </StyledOverlay>,
    document.getElementById('modal-root')
  );
};

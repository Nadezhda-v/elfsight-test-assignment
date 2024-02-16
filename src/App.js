import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';

export const App = () => (
  <Routes>
    <Route path='*' element={
      <>
        <Main />
      </>
    } />
  </Routes>
);

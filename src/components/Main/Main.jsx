import { Route, Routes } from 'react-router-dom';

import { List } from './List/List';
import { Layout } from '../Layout/Layout';
import { Modal } from '../Modal/Modal';

export const Main = () => (
  <main>
    <Layout>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/card/:id' element={<Modal />} />
      </Routes>
    </Layout>
  </main>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Posts } from './components/Posts';
import { Post } from './components/Post';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';

// importando o react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* padrao de criacao do router-dom */}
    <BrowserRouter>
      {/* caso o seu componente nao for uma rota importe ele fora do route.
      */}
      <Menu />
      <Routes>
        {/* Route vai ter o path, em que eu digo o nome da rota
            e o element, que diz qual componente irei utilizar nesta route
        */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}  />

          {/* criando uma rota em que passa um parametro */}
          {/* <Route path='/posts/:id' element={<Posts />} /> */}
          {/* criando uma rota alinhada */}
          <Route path='/posts' element={<Posts />}>
            <Route path=':id' element={<Post />} />
          </Route>
          
          <Route path='/posts' element={<Posts />} />
          <Route path='/redirect' element={<Redirect />} />
          {/* pega todas as rotas que nao existem 404*/}
          <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    { name: 'works', description: 'Below are the projects I have worked on. Click on a image for details' },
    { name: 'creative', description: 'I create TikTok videos for NBA players. Check them out!' },
    { name: 'documents', description: 'Here\'s my resumé, list of skills, and external links' },
    { name: 'contact', description: 'Need more information? Contact me!' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
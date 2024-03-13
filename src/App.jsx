import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const addToBookmark = blog => {

  }

  return (
    <>
      <Header></Header>
      <section className='md:flex'>
        <Blogs addToBookmark={addToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </section>
    </>
  )
}

export default App

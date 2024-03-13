import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const addToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <section className='md:flex gap-4 mt-8'>
        <Blogs addToBookmark={addToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </section>
    </>
  )
}

export default App

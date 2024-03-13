import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    // adding unique blog titles in the bookmark
    const uniqueNewBookmarks = newBookmarks.filter((blog, idx, self) => self.indexOf(blog)===idx);
    setBookmarks(uniqueNewBookmarks);
  }

  const markAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog title from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <section className='md:flex gap-4 mt-8'>
        <Blogs markAsRead={markAsRead} addToBookmark={addToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </section>
    </>
  )
}

export default App

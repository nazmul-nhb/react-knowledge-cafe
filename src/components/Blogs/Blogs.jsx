import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ addToBookmark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {/* <h2 className="text-4xl">Blogs</h2> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} addToBookmark={addToBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes  = {
    addToBookmark: PropTypes.func.isRequired
}

export default Blogs;
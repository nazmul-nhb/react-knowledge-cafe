import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, addToBookmark }) => {
    const { title, cover, reading_time, posted_date, author_img,
        author, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={title} />
            <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                    <img className='w-16 h-16' src={author_img} alt={`Image of ${author}`} />
                    <div className="flex flex-col">
                        <h3 className="text-2xl">{author}</h3>
                        <p className="">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="">{reading_time} min read</span>
                    <button onClick={()=>addToBookmark(blog)} className='hover:text-red-600 font-black'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href={`#${hash}`}>#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addToBookmark: PropTypes.func.isRequired
}

export default Blog;
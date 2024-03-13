import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold mb-8 text-[#6047EC] bg-[#1111110D] p-4 rounded-xl text-center">Spent time on read: {readingTime}</h2>

            <div className="flex flex-col gap-4 bg-[#1111110D] rounded-xl p-4">
                <h2 className='text-4xl font-extrabold'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;
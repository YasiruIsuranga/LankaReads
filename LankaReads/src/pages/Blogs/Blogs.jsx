import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import ScrollTop from '../../components/Scroll-top/ScrollTop'
import Footer from '../../components/Footer/footer';



function Blogs() {
    const [expandedPostId, setExpandedPostId] = useState(null);

    const posts = [
        {
            id: 1,
            title: "Welcome to Our New Blog!",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta at debitis in, aliquid ipsum aut nemo sint cum praesentium provident illo ipsa, ipsam vero! Quas fugiat autem labore aperiam molestias architecto repellat perspiciatis blanditiis enim soluta! Quo fugiat nobis provident hic reiciendis sapiente ut reprehenderit temporibus molestiae labore, molestias omnis dolores maxime assumenda illum accusantium expedita facere ullam nisi praesentium ducimus quaerat aliquid? Deserunt soluta assumenda autem, ipsa inventore obcaecati praesentium modi! Nisi facere, error sint provident architecto debitis perferendis ex, doloremque qui aspernatur ipsam? Blanditiis inventore repellat in labore sit? Perferendis cum nam at quaerat, repudiandae harum itaque voluptatibus vero? Numquam voluptates repellat ipsum, molestias adipisci deserunt iusto mollitia minus perferendis pariatur iste ea saepe. Quas a eius similique cumque quisquam deserunt expedita laboriosam, soluta reprehenderit. Alias nihil nam quae aperiam nulla architecto, tenetur eligendi velit dicta labore esse eaque vel illum beatae nisi repudiandae? Vero quisquam aperiam quidem odit omnis, perspiciatis, quae nobis repellendus consequuntur nemo blanditiis accusamus neque quasi quos reprehenderit necessitatibus! Ratione odit id, unde, aliquam sunt mollitia ipsam perferendis sed labore maxime impedit, eaque commodi praesentium amet ex reiciendis? Accusamus minima accusantium consequatur nulla porro rem quidem ducimus ipsam explicabo non libero iure illo magni, deleniti debitis necessitatibus nobis sapiente possimus exercitationem consectetur, minus pariatur aspernatur a distinctio? Illum numquam aperiam consequatur provident, nihil doloribus possimus sunt adipisci accusantium odit asperiores ipsam est porro quo. Officia, amet esse. A consectetur fuga ducimus aperiam asperiores molestias consequatur illo, suscipit magnam aliquam rerum. Commodi cupiditate aliquid facere.",
            image: "https://blog.feedspot.com/wp-content/uploads/2017/06/novel.jpg",
            author: "Admin",
            date: "July 29, 2024",
            likes: 10,
            comments: 5
        },
        {
            id: 2,
            title: "Latest News and Updates",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta at debitis in, aliquid ipsum aut nemo sint cum praesentium provident illo ipsa, ipsam vero! Quas fugiat autem labore aperiam molestias architecto repellat perspiciatis blanditiis enim soluta! Quo fugiat nobis provident hic reiciendis sapiente ut reprehenderit temporibus molestiae labore, molestias omnis dolores maxime assumenda illum accusantium expedita facere ullam nisi praesentium ducimus quaerat aliquid? Deserunt soluta assumenda autem, ipsa inventore obcaecati praesentium modi! Nisi facere, error sint provident architecto debitis perferendis ex, doloremque qui aspernatur ipsam? Blanditiis inventore repellat in labore sit? Perferendis cum nam at quaerat, repudiandae harum itaque voluptatibus vero? Numquam voluptates repellat ipsum, molestias adipisci deserunt iusto mollitia minus perferendis pariatur iste ea saepe. Quas a eius similique cumque quisquam deserunt expedita laboriosam, soluta reprehenderit. Alias nihil nam quae aperiam nulla architecto, tenetur eligendi velit dicta labore esse eaque vel illum beatae nisi repudiandae? Vero quisquam aperiam quidem odit omnis, perspiciatis, quae nobis repellendus consequuntur nemo blanditiis accusamus neque quasi quos reprehenderit necessitatibus! Ratione odit id, unde, aliquam sunt mollitia ipsam perferendis sed labore maxime impedit, eaque commodi praesentium amet ex reiciendis? Accusamus minima accusantium consequatur nulla porro rem quidem ducimus ipsam explicabo non libero iure illo magni, deleniti debitis necessitatibus nobis sapiente possimus exercitationem consectetur, minus pariatur aspernatur a distinctio? Illum numquam aperiam consequatur provident, nihil doloribus possimus sunt adipisci accusantium odit asperiores ipsam est porro quo. Officia, amet esse. A consectetur fuga ducimus aperiam asperiores molestias consequatur illo, suscipit magnam aliquam rerum. Commodi cupiditate aliquid facere.",
            image: "https://www.powells.com/portals/0/Images/blog_leguin_2024.jpeg",
            author: "Jane Doe",
            date: "July 28, 2024",
            likes: 20,
            comments: 15
        },
        {
            id: 3,
            title: "How to Engage with Our Content",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta at debitis in, aliquid ipsum aut nemo sint cum praesentium provident illo ipsa, ipsam vero! Quas fugiat autem labore aperiam molestias architecto repellat perspiciatis blanditiis enim soluta! Quo fugiat nobis provident hic reiciendis sapiente ut reprehenderit temporibus molestiae labore, molestias omnis dolores maxime assumenda illum accusantium expedita facere ullam nisi praesentium ducimus quaerat aliquid? Deserunt soluta assumenda autem, ipsa inventore obcaecati praesentium modi! Nisi facere, error sint provident architecto debitis perferendis ex, doloremque qui aspernatur ipsam? Blanditiis inventore repellat in labore sit? Perferendis cum nam at quaerat, repudiandae harum itaque voluptatibus vero? Numquam voluptates repellat ipsum, molestias adipisci deserunt iusto mollitia minus perferendis pariatur iste ea saepe. Quas a eius similique cumque quisquam deserunt expedita laboriosam, soluta reprehenderit. Alias nihil nam quae aperiam nulla architecto, tenetur eligendi velit dicta labore esse eaque vel illum beatae nisi repudiandae? Vero quisquam aperiam quidem odit omnis, perspiciatis, quae nobis repellendus consequuntur nemo blanditiis accusamus neque quasi quos reprehenderit necessitatibus! Ratione odit id, unde, aliquam sunt mollitia ipsam perferendis sed labore maxime impedit, eaque commodi praesentium amet ex reiciendis? Accusamus minima accusantium consequatur nulla porro rem quidem ducimus ipsam explicabo non libero iure illo magni, deleniti debitis necessitatibus nobis sapiente possimus exercitationem consectetur, minus pariatur aspernatur a distinctio? Illum numquam aperiam consequatur provident, nihil doloribus possimus sunt adipisci accusantium odit asperiores ipsam est porro quo. Officia, amet esse. A consectetur fuga ducimus aperiam asperiores molestias consequatur illo, suscipit magnam aliquam rerum. Commodi cupiditate aliquid facere.",
            image: "https://the-bibliofile.com/wp-content/uploads/bestbookblogs-800x800.jpg",
            author: "John Smith",
            date: "July 27, 2024",
            likes: 30,
            comments: 25
        }
    ];

    const handleReadMore = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        <>
            <Header />
            <div className="jumbotron jumbotron-fluid text-white text-center" style={{ backgroundColor: '#f42d00', padding: '100px 0',  }}>
                <div className="container">
                    <h1 className="display-4">Join Us Today!</h1>
                    <p className="lead">Become a part of our reading community.</p>
                </div>
            </div>
            <div className="container my-5">
                <h1 className="text-center mb-5" style={{ color: '#f42d00' }}>Our Blog</h1>
                <div className="row">
                    {posts.map((post) => (
                        <div key={post.id} className="col-12 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={post.image}
                                    className="card-img-top"
                                    alt={post.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">
                                        {expandedPostId === post.id ? post.content : post.content.substring(0, 100) + '...'}
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">By {post.author} on {post.date}</small>
                                    </p>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <div>
                                        <button className="btn btn-light mr-2" style={{ color: '#f42d00' }}>
                                            <i className="bi bi-hand-thumbs-up-fill"></i> {post.likes}
                                        </button>
                                        <button className="btn btn-light" style={{ color: '#f42d00' }}>
                                            <i className="bi bi-chat-dots"></i> {post.comments}
                                        </button>
                                    </div>
                                    <button
                                        className="btn btn-outline-primary"
                                        style={{ borderColor: '#f42d00', color: '#f42d00' }}
                                        onClick={() => handleReadMore(post.id)}
                                    >
                                        {expandedPostId === post.id ? 'Show Less' : 'Read More'}
                                    </button>
                                </div>
                                {expandedPostId === post.id && (
                                    <div className="card-body">
                                        <h5>Comments</h5>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="3" placeholder="Leave a comment..."></textarea>
                                        </div>
                                        <button className="btn btn-primary" style={{ backgroundColor: '#f42d00', borderColor: '#f42d00' }}>
                                            Submit
                                        </button>
                                        <div className="mt-4">
                                            <div className="mb-2">
                                                <strong>John Doe:</strong> Great post!
                                            </div>
                                            <div className="mb-2">
                                                <strong>Jane Doe:</strong> Very informative.
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <ScrollTop/>
            <Footer/>
        </>
    );
}

export default Blogs;

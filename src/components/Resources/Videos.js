import React from 'react';
import './Blog.css';

const blogData = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/61c1ae3ff5494602327bf16a/61c2a8ff30f5957876adadf3_temp-blog-thumbnail.svg',
    title: 'How to start your own syndicate',
    date: 'LetsVenture Syndicate platform is now live. Source deals, find backers from the angel investor pool on our platform and seamlessly manage startup deals.',
   
  },
  {
    id: 2,
    image: 'https://cdn.prod.website-files.com/61c1ae3ff549466c737bf183/65646dc6b03f038d3d4e41f1_Untitled%20design%20(2).png',
    title: 'Revenue-Based Financing: LetsVenture\'s Role in Transforming Indian Startup Growth',
    date: 'October 17, 2024',
    readTime: '4 min read'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Key Milestones Investors Want at Every Stage of Startup Fundraising',
    date: 'October 17, 2024',
    readTime: '4 min read'
  }
];

const newsData = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/61c1ae3ff549466c737bf183/65646c9905f968db6932fbb6_Untitled%20design%20(1).png',
    title: 'BHIVE\'s fintech investment platform for HNIs hits monthly revenue of $1million; opens fresh round of funding',
    date: 'January 24, 2022',
    readTime: '3 min '
  },
  {
    id: 2,
    image: 'scriboox-logo.png',
    title: 'Scriboox raises $21 million in funding round led by Angel Partners',
    date: 'January 18, 2022',
    readTime: '3 min '
  }
];

const Videos = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Videos</h1>
        <p>The best of learnings from the best of entrepreneurs, investors and operators.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="recent-stories">
          {blogData.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="story-content">
                <h2>{story.title}</h2>
                <p>{story.date} - {story.readTime}</p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar">
          <div className="latest-blogs">
            <h2>Latest Blogs</h2>
            {blogData.map(blog => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.date} - {blog.readTime}</p>
                  <a href="#" className="read-more">Read More</a>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Videos;
import React from "react";
import "./Blog.css";

const blogData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "How RevFin Electrified Its Growth: A Debt Funding Success Story with LetsVenture",
    date: "October 23, 2024",
    readTime: "4 min read",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Revenue-Based Financing: LetsVenture's Role in Transforming Indian Startup Growth",
    date: "October 17, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Key Milestones Investors Want at Every Stage of Startup Fundraising",
    date: "October 17, 2024",
    readTime: "4 min read",
  },
];

const newsData = [
  {
    id: 1,
    image: "bhive-logo.png",
    title:
      "BHIVE's fintech investment platform for HNIs hits monthly revenue of $1million; opens fresh round of funding",
    date: "January 24, 2022",
    readTime: "3 min read",
  },
  {
    id: 2,
    image: "scriboox-logo.png",
    title: "Scriboox raises $21 million in funding round led by Angel Partners",
    date: "January 18, 2022",
    readTime: "3 min read",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blogs</h1>
        <p>
          Latest in-depth reads with actionable insights for startups &
          investors
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="recent-stories">
          {blogData.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.title} />
              </div>
              <div className="story-content">
                <h2>{story.title}</h2>
                <p>
                  {story.date} - {story.readTime}
                </p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar">
          <div className="latest-blogs">
            <h2>Latest Blogs</h2>
            {blogData.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <h3>{blog.title}</h3>
                  <p>
                    {blog.date} - {blog.readTime}
                  </p>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="news">
            <h2>News</h2>
            {newsData.map((newsItem) => (
              <div key={newsItem.id} className="news-item">
                <div className="news-image">
                  <img src={newsItem.image} alt={newsItem.title} />
                </div>
                <div className="news-content">
                  <h3>{newsItem.title}</h3>
                  <p>
                    {newsItem.date} - {newsItem.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

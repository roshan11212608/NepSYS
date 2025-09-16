import React from 'react';
import styles from './Blog.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Blog = () => (
  <>
  <Header/>
  <div className={styles.blog}>
    <h2>Blog & News</h2>
    <p>Latest updates, news, and articles from NepSYS.</p>
  </div>
  <Footer/>
  </>
);

export default Blog;

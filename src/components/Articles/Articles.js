import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import './Articles.css';

function Articles() {
  const [articles, setArticles] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const data = [
    {url: require('../../assets/articles/img1.png'), title: 'Grilled Tomatoes at Home', desc: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`},

    {url: require('../../assets/articles/img2.png'), title: 'Snacks for Travel', desc: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`},

    {url: require('../../assets/articles/img3.png'), title: 'Post-workout Recipes', desc: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`},

    {url: require('../../assets/articles/img4.png'), title: 'How To Grill Corn', desc: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`},

    {url: require('../../assets/articles/img5.png'), title: 'Crunchwrap Supreme', desc: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`},

    {url: require('../../assets/articles/img6.png'), title: 'Broccoli Cheese Soup', desc: `PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...`},
  ]

  useEffect(() => {
    setArticles(data);
  }, []);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + cardsPerSlide);
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerSlide < 0 ? 0 : prevIndex - cardsPerSlide
    );
  };

  return (
    <div className='articles-container'>
      <p>Latest Articles</p>
      <div className='slider'>
        {articles &&
          articles?.slice(currentIndex, currentIndex + cardsPerSlide)?.map((article, index) => (
              <Card
                key={index}
                url={article.url}
                title={article.title}
                desc={article.desc}
              />
            ))}
      </div>
      <div className="buttons">
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        &lt;
      </button>
      {(currentIndex/cardsPerSlide + 1)+ '/' + articles?.length/cardsPerSlide}
      <button
        onClick={handleNext}
        disabled={currentIndex + cardsPerSlide >= articles?.length}
      >
        &gt;
      </button>
      </div>
    </div>
  );
}

export default Articles;

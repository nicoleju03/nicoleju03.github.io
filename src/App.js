import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from './components/ArticleGrid';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.grad.issue.2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <ArticleGrid articles={data.news}></ArticleGrid>
      <ArticleGrid articles={data.sports}></ArticleGrid>
      <ArticleGrid articles={data.arts}></ArticleGrid>
      <ArticleGrid articles={data.opinion}></ArticleGrid>
      <ArticleGrid articles={data.multimedia}></ArticleGrid>
      <ArticleGrid articles={data.prime}></ArticleGrid>
      <ArticleGrid articles={data.thirty}></ArticleGrid>


      <Footer/>
    </div>
  );
}

export default App;

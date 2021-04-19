import React from 'react'
import ArtigoHome from '../../components/ArtigoHome/ArtigoHome';
import { Main } from './HomeElements';
import TopPosts from '../../components/TopPosts/TopPosts';

const Home = () => {
  return (
    <>
      <Main>
        <ArtigoHome />
        <TopPosts />
      </Main>
    </>
  )
}

export default Home

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Header from '../Header';
import MainContent from '../MainContent';
import Newsletter from '../Newsletter';
import messages from './messages';

export default function HomePage() {
  return (
    <>
      <Header title={messages.title} />
      <MainContent />
      <Newsletter />
    </>
  );
}

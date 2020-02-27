/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Header from '../Header';
import MainContent from '../MainContent';

export default function HomePage() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

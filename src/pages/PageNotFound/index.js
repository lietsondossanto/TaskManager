import React from 'react';

import { Wrapper } from './styles';

import pageNotFoundImage from './../../assets/img/undraw_page_not_found.svg'

function PageNotFound() {
  return (
    <>
      <Wrapper>
        <img src={pageNotFoundImage} alt="Page Not Found" />
        <h1>Page Not Found</h1>
      </Wrapper>
    </>
  )
}

export default PageNotFound;

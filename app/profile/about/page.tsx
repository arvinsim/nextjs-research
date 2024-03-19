'use client'
import React, {Suspense } from 'react';
import Loading from "../loading";

import {useTimeout} from "../../../utilities/hooks";
function AboutPage() {
  return (
      <Suspense fallback={<Loading/>}>
          <AboutContent/>
      </Suspense>
  );
}

function AboutContent() {
    useTimeout(() => {
        console.log('loaded!')
    }, 50000)

    return (
        <div className="bg-blue-300">
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    );
}

export default AboutPage;

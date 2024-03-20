import React, {Suspense } from 'react';
import Loading from "../loading";
import {AboutContent} from "./AboutContent";

function AboutPage() {
  return (
      <Suspense fallback={<Loading/>}>
          <AboutContent />
      </Suspense>
  );
}

export default AboutPage;

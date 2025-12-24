
import React, { Suspense } from 'react';
import ParentComponent from './ParentsComponents/ParentComponent';

const LazyLoad = React.lazy(() => import('./LazyLoad/LazyLoad'));

function App() {
  return (
    <div>
      <ParentComponent />

      <h1>Hi Lazy Loading</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <LazyLoad />
      </Suspense>
    </div>
  );
}

export default App;

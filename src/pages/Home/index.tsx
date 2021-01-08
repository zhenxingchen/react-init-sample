import * as React from 'react';
import Demo from '@components/Demo';
import './style.less';

function Home() {

  const render = () => {
    return (
      <div className="home">
        Hello React
        <Demo/>
      </div>
    );
  };

  return render();

}

export default Home;

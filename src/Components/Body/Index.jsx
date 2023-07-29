import DataRight from './Data_Right/dataRight';
import Email from './Get Email/Email';
import Journey from './Journey/Journey';
import Title from './Title/Title';
import DataLeft from './Data_Left/dataLeft';

import './Index.scss';

const Index = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item-1">
          <Title />
        </div>
        <div className="grid-item-2">
          <Email />
        </div>
        <div className="grid-item-3">
          <DataLeft />
        </div>
        <div className="grid-item-4">
          <DataRight />
        </div>
        <div className="grid-item-5">
          <Journey />
        </div>
      </div>
    </>
  );
};

export default Index;

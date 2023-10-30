import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

function AppWrap(Component, idName,classNames){ return function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className='app__wrapper app_flex'>
            <Component />        
        </div>

        <NavigationDots active={idName} />
    </div>
  );
}
};

export default AppWrap;
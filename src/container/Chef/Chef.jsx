import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => {
  return(
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'> 
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading  title={"Chef's Words"}/>
      <h1 className='headtext__cormorant'>What We Belive In </h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quotes'/>
              <p className='p__opensans'>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <p className='p__opensans'>consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef And Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);
}

export default Chef;

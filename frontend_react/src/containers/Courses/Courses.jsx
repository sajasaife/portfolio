import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Courses.scss'; 

function Course() {
  const [brands, setBrands] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "courses"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setCourses(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
   <>
      <h4 className='head-text'>Courses & Brands</h4>
      {courses.length && (
        <>
          <div className="app__course-item app__flex">
            <img src={urlFor(courses[currentIndex].imgurl)} alt={courses[currentIndex].name} />
            <div className="app__course-content">
              <p className="p-text">{courses[currentIndex].description}</p>
              <div>
                <h4 className="bold-text">{courses[currentIndex].name}</h4>
                <h5 className="p-text">{courses[currentIndex].institution}</h5>
              </div>
            </div>
          </div>

          <div className="app__course-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? courses.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === courses.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__course-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Course, 'app__course'),
  'course',
  'app__primarybg',
);
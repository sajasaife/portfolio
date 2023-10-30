import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
//import { images } from '../../constants';
import {urlFor, client} from '../../client';

/*const abouts = [
  { title: 'Frontend', description: 'I am a good frontend developer.', imgUrl: images.about01 },
  { title: 'Backend', description: 'I am a good backend developer.', imgUrl: images.about02 },
  { title: 'Full-stack', description: 'I am a good Full-stack developer.', imgUrl: images.about03 },
];*/

function  About () {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Code</span> <br />speaks loader than  <span>words</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about',
   'app__whitebg'
   );
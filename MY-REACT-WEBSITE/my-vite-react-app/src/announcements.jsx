import "./announcements.css";
import PropTypes from 'prop-types';
import blogImg from './assets/blog.jpg';

function Announcements({ announcement = 0, imageSrc = blogImg, description = 'something',  }) {

  return (
    <section>
      <div className="card">
        <img alt={announcement} src={imageSrc} />
        <h2>{announcement}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

Announcements.propTypes = { 
  announcement: PropTypes.number,
  imageSrc: PropTypes.string,
  description: PropTypes.string, 
};

export default Announcements;

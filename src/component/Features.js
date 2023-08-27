import f1 from './f1.png';
import f2 from './f2.png';
import f3 from './f3.png';
import f4 from './f4.png';

const Features = () => {
  
  return(
    <div className="features">
    <div className="row">
      <div className="text-col">
        <h2>Enjoy on your TV.</h2>
        <p>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple, Blue-ray
          players and more.
        </p>
      </div>
      <div className="img-col">
        <img src={f1} />
      </div>
    </div>
    <div className="row">
      <div className="img-col">
        <img src={f2} />
      </div>
      <div className="text-col">
        <h2>Download your shows to watch offline.</h2>
        <p>Save your favourites easily and always have something to watch.</p>
      </div>
    </div>
    <div className="row">
      <div className="text-col">
        <h2>Watch everywhere.</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="img-col">
        <img src={f3} />
      </div>
    </div>
    <div className="row">
      <div className="img-col">
        <img src={f4} />
      </div>
      <div className="text-col">
        <h2>Creates profiles for children.</h2>
        <p>
          Send children on adventures with their favourites characters in a
          space made just for them-free with your membership.
        </p>
      </div>
    </div>
  </div>
  );
}

export default Features
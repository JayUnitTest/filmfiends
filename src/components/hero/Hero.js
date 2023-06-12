import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Reviews from '../reviews/Reviews';
import Button  from 'react-bootstrap/Button';
import YouTube from 'react-youtube';


const Hero = ({ movies }) => {
    const navigate = useNavigate();
  
    function reviews(movieId) {
      navigate(`/Reviews/${movieId}`);
    }
  
    return (
      <div className="movie-carousel-container">
        <Carousel>
          {movies?.map((movie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className="movie-card-container">
                  <div
                    className="movie-card"
                    style={{ '--img': `url(${movie.backdrops[0]})` }}
                  >
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                      <div className="movie-buttons-container">
                        <Link
                          to={`/Trailer/${movie.trailerLink.substring(
                            movie.trailerLink.length - 11
                          )}`}
                        >
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faClapperboard}
                            />
                          </div>
                        </Link>
                        <div className="movie-review-button-container">
                          <Button 
                          className='reviewBtn'
                            variant="info"
                            onClick={() => reviews(movie.imdbId)}
                          >
                            Reviews
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
        </Carousel>
        <div className="movie-card-poster">
          <div className="card-reveal">
            <h1>Latest releases</h1>
          </div>
          <div className="card">
            <img src="https://image.tmdb.org/t/p/w1280/AjC2OM0B5smL34FoiX5Y9P83o3e.jpg" alt="" />
            <div className="info">
              <h1>Spider-Man: Across The Spider-Verse</h1>
              <p>
                Miles Morales catapults across the Multiverse, where he encounters a team of
                Spider-People charged with protecting its very existence.
              </p>
              <h2>
                <i className="fa fa-star" aria-hidden="true"></i>9.0/10
              </h2>
            </div>
          </div>
          <div className="card">
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" alt="" />
            <div className="info">
              <h1>The Super Mario Bros Movie</h1>
              <p>
                A plumber named Mario travels through an underground labyrinth with his brother, Luigi,
                trying to save a captured princess.
              </p>
              <h2>
                <i className="fa fa-star" aria-hidden="true"></i>7.2/10
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
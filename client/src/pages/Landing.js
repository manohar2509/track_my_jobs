import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              <span>Job</span> Tracker
            </h1>
            <p>
            Keep track of all your job applications in one place with our intuitive app.
Say goodbye to missed deadlines and lost opportunities with our powerful application tracking system.
Make your job search more efficient and effective with our comprehensive job application tracker.
Stay organized and stay ahead of the competition with our easy-to-use dashboard.
Join thousands of satisfied job seekers who have found their dream jobs with our application tracking app.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;

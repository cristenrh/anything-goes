import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.jsx';
import Wrapper from '../wrapper/wrapper.component';
import { Link } from 'react-scroll';



const Section1Styled = styled.div`

#cover {
    margin-top: 75px;
}

  background-color: white;
  .active {
    border-bottom: 1px solid white;
  }
  h4 {
    margin-top: 0px;
    font-size: 30px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-width: 300px;
}

  @media only screen and (max-width:600px) {

}

`;

export default function Cover() {
  return (
    <Section1Styled>
      <Wrapper>
         <div id="cover">
    <Logo></Logo>

    <h1>Anything Goes!</h1>


    
        <p>
        <strong>MUSIC:</strong> COLE PORTER<br/>
        <strong>BOOK: </strong>GUY BOLTON, P. G. WODEHOUSE<br/>
        <strong>LYRICS: </strong>COLE PORTER<br/>
        </p>
        <p>
          Directed by<br/>
          Mr. George Franco &amp; Ms. Robin King
        </p>
            <p>
          Choreographed by<br/>
          <Link to='Sophie Steinhauser' offset={-100}  smooth={true} duration={1000}>Iliana Sharp</Link><span> &amp; </span> 
          <Link to="Lauren Smith"  offset={-100}  smooth={true} key="Lauren Smith"   duration={1000}>Lauren Smith</Link>
        </p>
      <h3>Performance Schedule</h3>
       
                <div className="container">
                  <div>
                  <strong>De'Lightful Cast</strong><br/>
                        January 13, @ 7pm<br/>
                        January 15, @ 2pm
                    </div>
                  <div>
                   <strong>De'Lovely Cast</strong><br/>
                        January 14, @ 7pm<br/>
                        January 15, @ 7pm
                    </div>
                    </div>
      
        </div>
      </Wrapper>
    </Section1Styled>
  );
}

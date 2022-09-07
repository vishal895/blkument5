import React from "react";
import "../components/homepage.css"
import ImageText from "../components/imageText";

const Homepage = () => {
  return (
    <>
       <section>
      <div className="image_text_portion">
        <div className="left_image">
          <div className="image">
            <img
              src="	https://mobirise.com/extensions/seminarm4/workshop/assets/images/w1-1036x1036.jpg"
              className="pic"
            />
            <div className="img2">
            <img src="https://mobirise.com/extensions/seminarm4/workshop/assets/images/w2-530x354.jpg" className="pic" />
          </div>
          </div>
          </div>
          <div className="right_text">
            <h1 className="heading1">Online Workshop</h1>
            <p className="paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi
              quis purus at ipsum tristique varius sit amet id odio.
            </p>
            <button className="btm">Purschase now</button>
          </div>
      </div>
      </section> 
      <section>
      <div className="text_image_portion">
        <div className="left_text">
          <h4 className="title">About us</h4>
          <h1 className="heading1">Over 10 years experience in industry</h1>
          <p className="paragraph2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi quis
            purus at ipsum tristique varius sit amet id odio.
          </p>
          <ul className="um">
            <li>Lorem ipsum</li>
            <li>Morbi quis purus at ipsum</li>
            <li>Aliquam tortor purus</li>
            <li>Blandit a dolor</li>
          </ul>
          <h4 className="last_heading">Lorem ipsum dolor sit amet</h4>
        </div>
        <div className="right_image">
          <div className="image">
            <img
              src="https://mobirise.com/extensions/seminarm4/workshop/assets/images/w3-1076x1345.jpg"
              className="pic"
            />
          </div>
        </div>
      </div>
      </section>
      <section>
      <div className="four_image">
        <h1 className="head">What we do</h1>
        <div className="four_portion">
          <ImageText imk="https://mobirise.com/extensions/seminarm4/workshop/assets/images/w5-1076x1076.jpg" par="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nobis
          eius accusamus possimus facere assumenda quae odit qui reprehenderit
          expedita" hd="Indoor furniture."/>
          <ImageText imk="https://mobirise.com/extensions/seminarm4/workshop/assets/images/w1-1076x1076.jpg"hd="Home wood work" par="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  nobis eius accusamus possimus facere assumenda quae odit qui
                  reprehenderit expedita"/>
          <ImageText imk="https://mobirise.com/extensions/seminarm4/workshop/assets/images/w7-1076x1076.jpg"hd="Outdoor Furniture" par="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  nobis eius accusamus possimus facere assumenda quae odit qui
                  reprehenderit expedita."/>
          <ImageText imk="https://mobirise.com/extensions/seminarm4/workshop/assets/images/w6-1076x1076.jpg"hd="Hardwood flooring" par=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  nobis eius accusamus possimus facere assumenda quae odit qui
                  reprehenderit expedita"/>
        </div>
      </div>
      </section>
      <section>
      <div className="box_content">
        <div className="content">
          <p className="paragraph3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            doloribus illo non quaerat consequuntur? Neque est obcaecati ex
            blanditiis inventore!
          </p>
          <h1 className="heading">Our workshops will help you</h1>
          <ul className="um">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>
              Minima id dolor libero saepe, dolores fuga officia voluptatum
            </li>
            <li>
              Officia voluptatum quos et consequatur ab dolorum modi qui iste
              maiores quasi, porro sequi ipsam at?
            </li>
            <li>
              Incidunt placeat nobis, quis sed recusandae saepe cumque
              voluptate?
            </li>
          </ul>
        </div>
      </div>
      </section>
      <section>
      <div className="image_box">
        <h1 className="heading1">Online Streaming</h1>
        <div className="hovr_image">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harder-jett-008-1643379018.jpg?crop=1.00xw:0.749xh;0.00160xw,0.115xh&resize=1200:*"
            className="pic_large"
          />
        </div>
      </div>
      </section>
      <section>
      <div className="testmonials">
      <div className="left_image">
          <div className="image3">
            <img
              src="	https://mobirise.com/extensions/seminarm4/workshop/assets/images/05.jpg"
              className="pic"
            />
          </div>
            <div className="b">
                <h1 className="heading">Testimonials</h1>
            </div>
          </div>
          <div className="right_text">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi
              quis purus at ipsum tristique varius sit amet id odio.
            </p>
            <h4 className="head1">Korben Clarkson</h4>
            <h3 className="sub_head">CEO, FRONTIERS EU</h3>
          </div>
        
      </div>
      </section>
      <section>
      <div className="contact_us">
          <h1 className="heading1">Connect with us</h1>
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tortor purus, suscipit a accumsan quis, blandit a dolor. Morbi
              quis purus at ipsum tristique varius sit amet id odio.</p>
              
              <div className="name"> First Name</div>
              <div className="name"> Last Name</div>
              <div className="name"> Service Name</div>
              <div className="name"> Phone</div>
              <div className="name"> Message</div>
              <button className="btk">Submit</button>
      </div>
      </section>
      </>
    
    
  );
};

export default Homepage;

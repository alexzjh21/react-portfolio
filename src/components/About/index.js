import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import cover1 from "../../assets/cover/1.jpg";
import cover2 from "../../assets/cover/2.jpg";
import cover3 from "../../assets/cover/3.jpg";
import cover4 from "../../assets/cover/4.jpg";
import cover5 from "../../assets/cover/5.jpg";
import cover6 from "../../assets/cover/6.jpg";
import cover7 from "../../assets/cover/7.jpg";
import cover8 from "../../assets/cover/8.jpg";
import cover9 from "../../assets/cover/9.jpg";
import cover10 from "../../assets/cover/10.jpg";
import cover11 from "../../assets/cover/11.jpg";
import cover12 from "../../assets/cover/12.jpg";
import cover13 from "../../assets/cover/13.jpg";
import cover14 from "../../assets/cover/14.jpg";
import cover15 from "../../assets/cover/15.jpg";

const images = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover13,
  cover14,
  cover15,
];
console.log(images)

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <div className="mx-a">
        <SimpleImageSlider
          width={900}
          height={504}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={5.0}
          navStyle={2}
        />
      </div>
      <div className="my-2">
        <p>
          I'm a 23 year old with an interesting background and a variety of hobbies. 
          I was born in Japan, moved to China at 10, and graduated from a college in the United States. 
          My ethnical background also includes Korean, and I was introduced to different culture and spirit at a young age.<br/><br/>
          I'm a Bachelor in sports management with coding experience and technological background.
          I have an internship experience in marketing and social media, and experience as a Junior Varsity basketball coach.
          I'm extremley passionate about both playing and watching sports, as I've grown up playing baseball, basketball, and football.
          I've learned teamwork and leadership through my athlete experience, as well as punctualities and the mindset of continuous imporvement.<br/><br/>
          I aspire to bet the best version of myself everyday and constantlyl lift the standard up for myself in various aspects every day. 
          If you like what you see or have any questions, don't hesitate to reach out!
        </p>
      </div>
    </section>
  )
}

export default About;
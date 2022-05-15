import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import cover1 from "../../assets/cover/1.jpg";
import cover2 from "../../assets/cover/2.jpg";
import cover3 from "../../assets/cover/3.jpg";
import cover4 from "../../assets/cover/4.jpg";
import cover5 from "../../assets/cover/5.jpg";

const images = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5
];
console.log(images)

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className="my-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
      </p>
      </div>
    </section>
  )
}

export default About;
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assests/me.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Zumba</h4>
          <p>
            We are Zumba. The place for most tasty and affordable food on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and bevrages. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Prashant Kumar</h3>
            </div>

            <p>
              I am Prashant Kumar, the founder of Zumba. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
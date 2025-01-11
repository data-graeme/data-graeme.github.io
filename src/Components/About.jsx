/**
 * About
 */

import React from "react";

/**
 * Background image
 */
import image from "../images/max-mckinnon-c9OCWLka764-unsplash.jpg";

const imageAltText = "An image of the Milky Way galaxy.";

/**
 * Greeting
 */
const greeting = "Hello. Thanks for Visiting.";

/**
 * Summary
 */
const summary =
  "My professional background is in data science. I am studying astrophysics and cybersecurity, and am learning game development in my free time.";

/**
 * Education
 */
const educationList = [
  "BS Astrophysics, Old Dominion University (In Progress)",
  "MS Business Analytics, College of William and Mary",
  "BS Business Analytics and Economics, Old Dominion University",
];

/**
 * Currently Learning
 */
const currentlyLearning = "";
const learningList = ["Unreal Engine 5", "Godot 4", "Blender", "Security+"];

/**
 * Build About section
 */
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "transparent",
          width: "100%",
          textAlign: "left",
          margin: "1rem",
        }}
      >
        <h2>{greeting}</h2>
        <p>{summary}</p>
        <h2>Education</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1rem",
          }}
        >
          {educationList.map((education) => (
            <li key={education}>{education}</li>
          ))}
        </ul>
        <h2>Currently Learning</h2>
        <p>{currentlyLearning}</p>
        <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1rem",
          }}
        >
          {learningList.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;

import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <section>
        <small>ABOUT</small>

        <h1>SpendWise</h1>
        <div className="about">

          <article>
            <h2>React Concepts</h2>

            <ul>
              <li>Functional components</li>
              <li>Class component</li>
              <li>Props and parent-child data</li>
              <li>useState and useEffect</li>
              <li>Events and forms</li>
              <li>React Router</li>
            </ul>
          </article>

          <article>
            <h2>Custom Features</h2>

            <ul>
              <li>Category filtering</li>
              <li>Search functionality</li>
              <li>Spending summary</li>
              <li>LocalStorage persistence</li>
              <li>Responsive design</li>
            </ul>
          </article>

        </div>
      </section>
    );
  }
}
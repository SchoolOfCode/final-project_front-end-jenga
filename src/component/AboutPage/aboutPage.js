import TeamMembers from "../TeamMembers/teamMembers";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="top-half-container">
        <h2 className="about-us-title" aria-label = "information about us">ABOUT US</h2>
      </div>
      <div className="bottom-content">
        <h3 aria-label = "information about the app">HOW TO USE THE APP</h3>
        <p>
          FINDERS KEEPERS was designed to be simple to use. On the home page you
          will find a search bar. Enter the country you'd like to visit to get
          all the unbiased information you need about that destination to best
          inform your decision.
        </p>
        <p>
          Log in with Google or create an account to be able to save your
          favourite destinations (this is unlimited!) to your profile page so
          you can easily jump back to them!By clicking your profile icon, you
          can find all your favourites in one place.
        </p>
        <p>
          PLUS we are working on adding a checklist feature to each saved
          location so you can be sure you have all you need before you travel!
        </p>

        <h3>FINDERS KEEPERS</h3>
        <p>
          The FINDERS KEEPERS application was created during a 4 week project.
          It's aim was to solve a problem. The problem this app aimed to solve
          can be split into two sections:
        </p>

        <h4>Too much information</h4>

        <p>
          During our consumer research, before app creation, we found that
          consumers were overwhelmed by all of the information out there when
          they were trying to book a holiday. They had way too many tabs open
          and felt they had to hold a lot of information between webpages to
          inform their decision
        </p>
        <p>
          We set out to solve this by creating an app that could store all the
          information you would need in one place. This is the first purpose of
          FINDERS KEEPERS
        </p>

        <h4>Profit influenced information</h4>

        <p>
          Whilst doing our research to source the best information for our new
          application we discovered a second problem; profit influenced the
          information websites provided.We found that websites seemed to avoid
          tougher topics like crime or possible negatives to travel in order to
          sell you their travel guides for example.
        </p>
        <p>This gave us a unique opportunity.</p>
        <p>
          We didn't need to make profit. Heck, we didn't even need to make a
          penny! We decided to take this as a bonus and focus on showing the
          truthful information - unedited and unbiased.
        </p>
        <p>
          To achieve this we didn't cherry pick our information and decided to
          display it to users as is. Giving our users full confidence in our
          information.
        </p>
        <h3>TEAM JENGA</h3>
        <p>So, who are we?</p>
        <p>
          We are team JENGA - the name comes from the first initial of each team
          members name. We loved it so much because a JENGA tower relies on all
          the bricks to stay standing and our team's focus was on the whole
          tower, not on the individual brick.{" "}
        </p>
        <p>
          We all began studying at the School of Code at the end of April and
          for some of us that was the first time we had ever written a line of
          code!
        </p>
        <p>
          As team JENGA we only met at the start of the 4 week project (which
          produced this app). We we're all involved in everything from product
          development to front and back end code!
        </p>
        <h4 aria-label = "information about the Jenga Team members">Team members -</h4>
        <TeamMembers />
        <p>Click on our images to view our GitHub profiles.</p>
      </div>
    </div>
  );
}

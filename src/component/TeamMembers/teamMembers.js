import "./teamMembers.css";

export default function TeamMembers() {
  return (
    <div className="team-members-container">
      <div className="team-member" id="josh">
        <p className="initial">J</p>
        <a href="https://github.com/pattisoj">
          <div className="team-member-image-container">
            <img
              src="https://avatars.githubusercontent.com/u/103646942?v=4"
              alt="team member - Josh"
              aria-label= "image of Jenga team member Josh"
            ></img>
          </div>
        </a>
        <p className="team-member-name">Josh Pattison</p>
      </div>

      <div className="team-member" id="eda">
        <p className="initial">E</p>
        <a href="https://github.com/smurfeda">
          <div className="team-member-image-container">
            <img
              src="https://avatars.githubusercontent.com/u/90448828?v=4"
              alt="team member - Eda"
              aria-label= "image of Jenga team member Eda"
            ></img>
          </div>
        </a>
        <p className="team-member-name">Eda Burns</p>
      </div>

      <div className="team-member" id="nafiso">
        <p className="initial">N</p>
        <a href="https://github.com/nafisoaden97">
          <div className="team-member-image-container">
            <img
              src="https://avatars.githubusercontent.com/u/103136799?v=4"
              alt="team member - Nafiso"
              aria-label= "image of Jenga team member Nafiso"
            ></img>
          </div>
        </a>
        <p className="team-member-name">Nafiso Aden</p>
      </div>

      <div className="team-member" id="gabor">
        <p className="initial">G</p>
        <a href="https://github.com/Szfinx5">
          <div className="team-member-image-container">
            <img
              src="https://avatars.githubusercontent.com/u/92371751?v=4"
              alt="team member - Gabor"
              aria-label= "image of Jenga team member Gabor"
            ></img>
          </div>
        </a>
        <p className="team-member-name">Gabor Havasi</p>
      </div>

      <div className="team-member" id="arian">
        <p className="initial">A</p>
        <a href="https://github.com/Dinomouse">
          <div className="team-member-image-container">
            <img
              src="https://avatars.githubusercontent.com/u/103888510?v=4"
              alt="team member - Arian"
              aria-label= "image of Jenga team member Arian"
            ></img>
          </div>
        </a>
        <p className="team-member-name">Arian Moossavi</p>
      </div>
    </div>
  );
}

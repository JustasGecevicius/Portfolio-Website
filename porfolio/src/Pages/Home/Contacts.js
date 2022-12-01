import github from "../Images/github.png"
import gmail from "../Images/gmail.png"
import linkedIn from "../Images/linkedin.png"
import "../SCSS/Home.css"


export const Contacts = () => {
  return <div className="contacts">

    <img className="githubLogo" src={github} alt="github"></img>
    <img className="gmailLogo" src={gmail} alt="gmail"></img>
    <img className="linkedInLogo" src={linkedIn}alt="linkedIn"></img>

  </div>;
};

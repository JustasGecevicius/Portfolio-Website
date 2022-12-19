import github from "../Images/github.png"
import gmail from "../Images/gmail.png"
import linkedIn from "../Images/linkedin.png"
import "../SCSS/Home.css"


export const Contacts = () => {
  return <div className="contacts">

    <a href="https://github.com/JustasGecevicius" target="_b"><img className="githubLogo" src={github} alt="github"/></a>
    <a href="mailto:justas.gecevicius.22@neoma-bs.com" target="_b"><img className="gmailLogo" src={gmail} alt="gmail"/></a>
    <a href="https://www.linkedin.com/in/justas-gecevicius-34aa94186/" target="_b"><img className="linkedInLogo" src={linkedIn} alt="linkedIn"/></a>

  </div>;
};

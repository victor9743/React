// instalar biblioteca icons via npm: npm install react-icons
// importando icons de font-awesome
import { FaFacebook, FaGithub, FaFacebookMessenger, FaInstagram, FaGooglePlay } from 'react-icons/fa'

function App() {
  return (
    <div>
      <h1>React icons</h1>
      <label>Facebook</label><br />
      <FaFacebook />
      <hr />
      <label>Github</label><br />
      <FaGithub />
      <hr />
      <label>Facebook Mensenger</label><br />
      <FaFacebookMessenger />
      <hr />
      <label>Instagram</label><br />
      <FaInstagram />
      <hr />
      <label>GooglePlay</label><br />
      <FaGooglePlay />
      <hr />
    </div>
  );
}

export default App;

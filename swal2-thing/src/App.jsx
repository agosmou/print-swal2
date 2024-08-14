// App.jsx
import './App.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import PrivHtml from './privacy.html?raw';  // Add `?raw` here

const MySwal = withReactContent(Swal);

function handlePrivacy() {
  console.log(PrivHtml)
  MySwal.fire({
    html: PrivHtml,  // Use the imported HTML string directly
    showCloseButton: true,
  });
}

function App() {
  return (
    <>
      <h1>Home</h1>
      <span onClick={handlePrivacy}>privacy policy</span>
    </>
  );
}

export default App;

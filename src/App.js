import {useState , useEffect} from "react";
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [isNum, setNum] = useState('');
  const [isSpecial, setSpeical] = useState('');
  const [passLength, setpassLength] = useState(8);
  const [copyPassword, setCopyPassword] = useState();
  const [copy, setCopy] = useState("Copy");


   const genratePassword = () => {
        const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const number = "1234567890";
        const special = "!@#$%^&*()_+~";
        let newPassword = "";

        const allChars = str + (isNum ? number : '') + (isSpecial ? special : '');

        for (let i = 0; i < passLength; i++) {
            newPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        console.log("Generated password:", newPassword);
        setPassword(newPassword);
    };


  useEffect(() => {
  genratePassword();

}, [isNum, isSpecial, passLength]);


const handleNumChange = (e) => {
        setNum(e.target.checked);
        setCopy("Copy")
    };

const handleSpecialChange = (e) => {
        setSpeical(e.target.checked);
        setCopy("Copy")
    };

const handleRangeChange = (e) => {
     setpassLength(parseInt(e.target.value));
     setCopy("Copy")
};
const handleClickcopy = (e) => { 
            navigator.clipboard.writeText(password);
            setCopy("Copied!")
}

  return (
    <>
          <div className="container my-5">
            <h1 className="text-center mb-4">Password Generator</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={password}
                            readOnly
                            className="form-control"
                            aria-label="Generated password"/>
                        <button
                            className="btn btn-outline-secondary"
                            type="button" onClick={handleClickcopy}
                        >
                            {copy}
                        </button>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="numCheck"
                                checked={isNum}
                                onChange={handleNumChange}
                            />
                            <label className="form-check-label" htmlFor="numCheck">
                                Include Numbers
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input w"
                                id="specialCheck"
                                checked={isSpecial}
                                onChange={handleSpecialChange}
                            />
                            <label className="form-check-label" htmlFor="specialCheck">
                                Include Special Characters
                            </label>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="rangeSlider">Password Length: {passLength}</label>
                        <input
                            type="range"
                            min="8"
                            max="20"
                            value={passLength}
                            onChange={handleRangeChange}
                            className="form-range"
                            id="rangeSlider"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
  );
}

export default App;

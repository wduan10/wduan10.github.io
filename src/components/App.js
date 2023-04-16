import "../css/style.css";

const headshot = require("../images/mainimg.jpg");
const linkedin = require("../images/linkedin.png");
const instagram = require("../images/instagram.png");

function App() {
    return (
        <div>
            <div className="wrapper">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    id="headshot"
                                    src={headshot}
                                    alt="placeholder"
                                />
                            </td>
                            <td className="cell-content">
                                <p className="name">Wilson Duan</p>
                                <p>wilsonduan10@gmail.com</p>
                                <a
                                    className="logo-link"
                                    href="https://www.linkedin.com/in/wilson-duan-30746b175"
                                    target="_blank"
                                >
                                    <img src={linkedin} alt="Linkedin" />
                                </a>
                                <a
                                    className="logo-link"
                                    href="https://www.instagram.com/duan_wilson/"
                                    target="_blank"
                                >
                                    <img src={instagram} alt="Linkedin" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Wilson Duan is a student-athlete in the Caltech class of
                    2026. He is studying computer science at Caltech while
                    simultaneously playing soccer competitively. He intends to
                    further his education through in-depth study of computer
                    science optimization algorithms and machine learning
                    algorithms.
                </p>
            </div>
        </div>
    );
}

export default App;

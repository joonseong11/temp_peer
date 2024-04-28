import logo from "./logo.svg";
import "./App.css";
import sample_banner from "./sample_banner.png";
import logo_sample from "./logo_sample.png";
import logo3 from "./peer_logo_ver3.png";

function App() { // after rebase is It good?
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo3} className="App-logo" alt="logo" />
        <p>
          peer-study를 방문해주셔서 감사합니다. <br />
          현재 서버 이전작업 중 입니다. <br />
          4월 20일부터 5월 4일까지 서비스가 중단됩니다. <br />
          양해부탁드립니다.
        </p>
        <a
          className="App-link"
          href="https://peer-study.notion.site/peer-web-application-4357c6a2739348de9476e09b1f81cfce?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          peer-study application 소개 바로가기
        </a>
      </header>
    </div>
  );
}

export default App;

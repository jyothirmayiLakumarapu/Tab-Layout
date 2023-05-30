import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';


const htmlCont = () => {
  return (
    <div id="content1" className="content">
      <div className="content-left">
        <h1>Learn HTML</h1>
        <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
          It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
        <a href="https://www.youtube.com/watch?v=v6-4wh_o9iM&t=185s">Watch Video</a>
      </div>
      <div className="content-right">
        <img src={image1} />
      </div>
    </div>
  )
}

const cssCont = () => {
  return (
    <div id="content1" className="content">
      <div className="content-left">
        <h1>Learn CSS</h1>
        <p>CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language.
          t provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces.</p>
        <a href="https://www.youtube.com/watch?v=v6-4wh_o9iM&t=185s">Watch Video</a>
      </div>
      <div className="content-right">
        <img src={image2} />
      </div>
    </div>
  )
}

const jsCont = () => {
  return (
    <div id="content1" className="content">
      <div className="content-left">
        <h1>Learn JAVASCRIPT</h1>
        <p>JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages.
          It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites.</p>
        <a href="https://www.youtube.com/watch?v=v6-4wh_o9iM&t=185s">Watch Video</a>
      </div>
      <div class="content-right">
        <img src={image3} />
      </div>
    </div>
  )
}

function App() {



  const [cont, setCont] = useState(htmlCont);
  const [countCss, setCountCss] = useState(0);
  const [countHtml, setCountHtml] = useState(0);
  const [countJs, setCountJs] = useState(0);


  const [styleHtml, setStyleHtml] = useState({
    color: "black",
    background: "#ffffff"

  });

  const [styleCss, setStyleCss] = useState({
    color: "black",
    background: "#ffffff",
  });

  const [styleJs, setStyleJs] = useState({
    color: "black",
    background: "#ffffff"
  });




  const handeleCont = (event) => {

    console.log(event.target.name);

    // change to html cont
    if (event.target.name === 'html') {

      // setting the style for html
      setStyleHtml((previous) => {
        return ({
          color:'pink',
          background: "orange",
        });

      });

      setStyleCss((previous) => {
        return ({
            color:'black',
            background: "#ffffff",
          });
        });

      setStyleJs((previous) => {
          return ({
            color:'black',
            background: "#ffffff",
          });
        });


      // setting cont
      setCont(htmlCont);
    }


    // change to css cont
    else if (event.target.name === 'css') {

      // set style css
      setStyleHtml((previous) => {
        return ({
          color:'black',
          background: "#ffffff",

        });

      });

      setStyleCss((previous) => {
        return ({
            color:'pink',
            background: "orange",

          });
        });

      setStyleJs((previous) => {
          return ({
            color:'black',
            background: "#ffffff",

          });
        });



      // count logic Simple explanation with useState
      setCountCss((prev) => {
        return prev + 1;
      });

      // container logic with useState
      setCont(cssCont);
    }


    else if (event.target.name === 'js') {

      // style in JS
      setStyleHtml((previous) => {
        return ({
          color:'black',
          background: "#ffffff",

        });

      });

      setStyleCss((previous) => {
        return ({
            color:'black',
            background: "#ffffff",

          });
        });

      setStyleJs((previous) => {
          return ({
            color:'pink',
            background: "orange",

          });
        });

      // change JS Cont
      setCont(jsCont);

    }

  }

  return (
    <div classNameName="App">
      <div className="hero">

        <div className="btn-box">
          <button id="btn1" name='html' onClick={handeleCont} style={styleHtml}>
            <i className="fa"></i>HTML</button>
          <button id="btn2" name='css' onClick={handeleCont} style={styleCss}>
            <i className="fa"></i>CSS {countCss}</button>
          <button id="btn3" name='js' onClick={handeleCont} style={styleJs}>
            <i className="fa"></i>JAVASCRIPT</button>
        </div>

        {
          cont
        }


      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Community from "./components/Community";

function App() {
  const [err, setErr] = useState("");
  const [comerr, setComErr] = useState("");
  const [succ, setSucc] = useState("");
  const [comsucc, setComSucc] = useState("");
  const [email, setEmail] = useState("");
  const [comemail, setComEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [no, setNo] = useState("");
  const [comview, setComView] = useState(false);
  const [view, setView] = useState(false);
  const [interval, setIntervalNo] = useState("");
  const [cominterval, setComIntervalNo] = useState("");

  const error = [
    "Halal police has caught an error. Please try again with a permissible input.",
    "Oops! That input is praying for mercy, try another.",
    "Sorry, this email won't work. But we're still making dua.",
    "Uh-oh, it seems like a jinn messed up our code. We're exorcising the issue. Try again",
    "Salaam! You've reached a dead end. Please turn around and try again.",
    "You've broken the input's fast. Please wait until sunset to try again.",
    "Allah knows best, but unfortunately we don't. Please try a different input.",
  ];

  const success = [
    "Your success is as delightful as a plate of dates during Ramadan.",
    "Allah is truly on your side! Congratulations.",
    "You've made it to the cool kids' table! Welcome to our Eid fest community.",
    "You've officially unlocked the door to our Eid fest community, congratulations!",
    "Alhamdulillah! You're now part of the ultimate halal celebration team.",
    "Welcome to the halal side.",
    "Mashallah, you're officially part of the Eid squad!",
  ];

  const handleComSubmit = (e) => {
    e.preventDefault();
    setComView(true);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(comemail)) {
      setComErr(error[Math.floor(Math.random() * 7)]);
      setComView(false);
    } else {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxa_Yn_MogAaSR8JRgF-xS5ldBqttA4ksvUWVMqnQ_TECnKoaTKoAByepnIM2lEkLTp/exec";
      let requestBody = new FormData();
      requestBody.append("Email", comemail);
      requestBody.append("Community", true);
      fetch(scriptURL, { method: "POST", body: requestBody })
        .then(() => {
          const interval = setTimeout(() => {
            setComEmail("");
          }, 10000);
          setComIntervalNo(interval);
          setComView(false);
          setComSucc(success[Math.floor(Math.random() * 7)]);
        })
        .catch(() => {
          setComView(false);
          setComErr(error[Math.floor(Math.random() * 7)]);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setView(true);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email) || (!no && !message)) {
      setErr(error[Math.floor(Math.random() * 7)]);
      setView(false);
    } else {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxa_Yn_MogAaSR8JRgF-xS5ldBqttA4ksvUWVMqnQ_TECnKoaTKoAByepnIM2lEkLTp/exec";
      let requestBody = new FormData();
      requestBody.append("Email", email);
      requestBody.append("First Name", firstName);
      requestBody.append("Last Name", lastName);
      requestBody.append("Phone Number", no);
      requestBody.append("Message", message);
      requestBody.append("Community", false);
      fetch(scriptURL, { method: "POST", body: requestBody })
        .then(() => {
          const interval = setTimeout(() => {
            setEmail("");
            setFirstName("");
            setLastName("");
            setMessage("");
            setMessage("");
          }, 10000);
          setIntervalNo(interval);
          setView(false);
          setSucc(success[Math.floor(Math.random() * 7)]);
        })
        .catch(() => {
          setView(false);
          setErr(error[Math.floor(Math.random() * 7)]);
        });
    }
  };

  useEffect(() => {
    setErr("");
    setSucc("");
    clearInterval(interval);
  }, [firstName, email, lastName, no, message]);

  useEffect(() => {
    setComErr("");
    setComSucc("");
    clearInterval(cominterval);
  }, [comemail]);

  return (
    <div className="App">
      <Hero />
      <About />
      <Gallery />
      <Feature />
      <FAQ />
      <Contact
        email={email}
        setEmail={setEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        no={no}
        setNo={setNo}
        message={message}
        setMessage={setMessage}
        err={err}
        succ={succ}
        view={view}
        handleSubmit={handleSubmit}
      />
      <Community
        email={comemail}
        setEmail={setComEmail}
        err={comerr}
        succ={comsucc}
        handleComSubmit={handleComSubmit}
        view={comview}
      />
      <Footer />
    </div>
  );
}

export default App;

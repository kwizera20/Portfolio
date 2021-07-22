import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({duration:2000});
    }, [])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section data-aos="fade-bottom" id="Contact">
    <div className="contact-wraper">
        <div className="container">
        <div className="row">
            <div className="col-md-4 conta">
<h2><b>Feel free to hit me up</b></h2>
<h3>Let us help each other and make our selves better humans</h3>
            </div>
            <div className="col-md-8">
            <form className="form" onSubmit={handleSubmit}>
    <h1>Tell Me Something </h1>

    <label>Name</label>
    <input
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <label>Email</label>
    <input
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <label>Message</label>
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>

    <button
      type="submit"
      style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
    >
      Submit
    </button>
  </form>
            </div>
        </div>
        </div>
    </div>
    </section>
  );
}
export default Contact;

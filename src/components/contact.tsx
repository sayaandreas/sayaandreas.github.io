interface ContactProps {
  email: string;
}

function Contact({ email }: ContactProps) {
  return (
    <section id="contact" className="section contact">
      <h2 className="numbered-section">04. What's Ahead</h2>

      <div className="text-center">
        <h2 className="display">Get in touch</h2>
        <p className="text-soft contact-desc">
          If you have a project in mind or need my help, don't hesitate to
          contact me. I'm willing to collaborate and offer my skills to take
          your project to the next level. I hope to hear from you soon!
        </p>

        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn"
        >
          <button className="btn btn--primary">Message me</button>
        </a>
      </div>
    </section>
  );
}

export default Contact;

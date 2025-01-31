interface IntroProps {
  name: string;
}

function Intro({ name }: IntroProps) {
  return (
    <section id="#intro" className="section intro">
      <p className="text-soft">Hello, My name is</p>
      <h1 className="display">
        {name} <br /> I turn digital ideas into reality.
      </h1>
      <p className="text-soft">
        Welcome to my little corner of the web. Here, you can get to know a bit
        about my journey, check out my projects, and see what I've been up to.
      </p>
      <a href="#about" className="btn btn--primary">
        Let's Dive In
      </a>
    </section>
  );
}

export default Intro;

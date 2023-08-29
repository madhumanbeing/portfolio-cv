import profile from "../assets/profile.avif";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <p className="hero-intro">
          Allow me to introduce myself. I'm Luke, originally from New Zealand,
          and now living in Australia for the past decade. While my professional
          background may not be rooted in IT, I possess a strong passion for all
          things IT-related and have developed a knack for quickly and
          efficiently resolving a wide range of tech-related issues.
          <br />
          <br />
          Throughout my 15-year tenure in the hospitality industry, I've honed
          my skills in problem-solving, including when it comes to
          troubleshooting hardware and software problems. During this time I
          have developed a unique skill set, including the ability to adapt to
          rapidly changing environments and find innovative solutions.
          <br />
          <br />
          My strength lies not only in my technical acumen but also in my
          exceptional communication skills and a dedication to delivering
          top-notch customer service. I pride myself on my ability to help
          clients feel comfortable, valued and understood.
        </p>
        <div className="image-container">
          <img src={profile} />
        </div>
      </div>
    </section>
  );
};

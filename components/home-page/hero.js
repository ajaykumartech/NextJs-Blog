import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ajay.jpg"
          alt="An image showing Ajay"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi ,I'm Ajay kumar Josyula</h1>
      <p className="text">Welcome to my website!</p>
      <p>
        I blog about web Development - especially frontend frameworks like
        React and NextJs.
      </p>
    </section>
  );
}
export default Hero;

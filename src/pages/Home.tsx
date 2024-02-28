import { CardOne, ButtonLink } from "@components";
import { rootsData } from "@data";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function Home() {
  return (
    <>
      <section id="hero">
        <div>
          <div>
            <h4>EXPLORE OPPORTUNITIES</h4>
            <h1>Find work that's worth it.</h1>
          </div>
          <div>
            <p>
              Make a career match where the peaple, perks and values aligh with
              you needs.
            </p>
            <div>
              <ButtonLink href={rootsData.register}>Get Started Now</ButtonLink>
              <ButtonLink href={rootsData.jobs}>Learn More</ButtonLink>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      {/* <section id="agreements">
				<Link to='url' className={twMerge(clsx(
					"",
					className
				))}>
					{children}
				</Link>
			</section> */}

      <section></section>
    </>
  );
}

export default Home;

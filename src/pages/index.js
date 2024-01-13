import Image from "next/image";
import Link from "next/link";
import hero from "../../public/assets/hero.png";

export default function HomePage() {
  return (
    <div className="grid-halves h-screennavbar hero">
      <div className="bg-teal">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="content-grid home-hero">
              <h1>
                The most <br /> epic products.
              </h1>
              <p className="section-subtitle">
                Discover an extraordinary collection of the most awe-inspiring
                and remarkable products that the digital realm has to offer.
              </p>
              <Link href="/products" className="large-button">
                <div className="large-button-text">Explore Products</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal">
        <div className="column-padding centered">
          <div className="callout-wrap">
            <Image
              alt="hero"
              src={hero}
              placeholder="blur"
              className="callout-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

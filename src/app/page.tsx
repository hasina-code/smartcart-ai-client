import Categories from "@/components/home/Categories";

import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChoose from "@/components/home/WhyChoose";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";

import About from "@/components/home/About";
import CallToAction from "@/components/home/CallToAction";



export default function HomePage() {
  return (
    <>
     <HeroSection />

<FeaturedProducts />
<WhyChoose />
<About />
<Categories />
<Stats />
<Testimonials />
<FAQ />
<Newsletter />
<CallToAction />
    
    </>
  );
}

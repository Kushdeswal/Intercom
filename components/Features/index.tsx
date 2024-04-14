import FeatureTitle from "../Common/FeatureTitle";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-5">
        <div className="container">
          

         

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2 mb-5">
          <div className="w-full border-white">
      <div className="wow fadeInUp border-slate-500	" data-wow-delay=".15s" style={{border:"1px solid white",padding:"20px",backgroundImage: "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",borderRadius:"20px"}}>
        
        <h5 className="mb-5 text-xl font-bold text-black sm:text-xl lg:text-md xl:text-md">
          Customizable Messenger
        </h5>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id voluptatum perspiciatis excepturi distinctio dicta dolores iure dolorem esse? Explicabo accusantium, tempore dolor vitae suscipit inventore minus deserunt magnam.
        </p>
      </div>
    </div>

    <div className="w-full border-white">
      <div className="wow fadeInUp border-slate-500	" data-wow-delay=".15s" style={{border:"1px solid white",padding:"20px",backgroundImage: "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",borderRadius:"20px"}}>
        
        <h5 className="mb-5 text-xl font-bold text-black sm:text-xl lg:text-md xl:text-md">
          Configurable Experiences
        </h5>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta id voluptatum perspiciatis excepturi distinctio dicta dolores iure dolorem esse? Explicabo accusantium, tempore dolor vitae suscipit inventore minus deserunt magnam.
        </p>
      </div>
    </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4 mb-5">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        <div className="container my-5" style={{display:"flex", justifyContent:"center", marginTop:"4.25rem", marginBottom:"4.25rem"}}>
          <h3 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white" style={{width:"50%"}}>Intercom powers our customers communications delivering conversions, customer engagement, and personalized support.The messenger is the heart of this strategy.</h3>
        
            
        
      </div>
      <h4 className="text-center">Lorem ipsum dolor sit</h4>
      <h6 className="text-center">Chief Consumer Officer, Delhi</h6>
      </section>
    </>
  );
};

export default Features;

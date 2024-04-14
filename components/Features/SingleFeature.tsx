import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full border-white">
      <div className="wow fadeInUp border-slate-500	" data-wow-delay=".15s" style={{border:"1px solid white",padding:"20px",backgroundImage: "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)",borderRadius:"20px"}}>
        <div className="mb-10 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%); bg-opacity-10 text-primary">
          {icon}
        </div>
        <h5 className="mb-5 text-xl font-bold text-black sm:text-xl lg:text-md xl:text-md">
          {title}
        </h5>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;

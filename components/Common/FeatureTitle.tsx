import Link from "next/link";

const FeatureTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black  sm:text-2xl md:text-[42px]">
          {title}
        </h2>
        <p className="text-xs !leading-relaxed text-body-color md:text-xs">
          {paragraph}
        </p>
         </div>
    </>
  );
};

export default FeatureTitle;

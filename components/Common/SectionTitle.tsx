import Link from "next/link";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "50px",
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
        <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[42px]">
          {title}
        </h2>
        <p className="text-xs !leading-relaxed text-body-color md:text-xs">
          {paragraph}
        </p>
        
        <div className="flex flex-col items-center mt-4 justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href=""
                    className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white duration-300 ease-in-out  hover:bg-primary/80"
                  >
                    Start free trial
                  </Link>
                  <Link
                    href=""
                    className="inline-block rounded-full  border bg-black px-4 py-2 text-xs font-medium text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    View demo
                  </Link>
                </div>

      </div>
    </>
  );
};

export default SectionTitle;

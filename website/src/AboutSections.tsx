import React from "react";

interface AboutSectionsProps {
  title: string;
  image: string;
  paragraph: string;
}

export const AboutSections: React.FC<AboutSectionsProps> = ({
  title,
  image,
  paragraph,
}) => {
  return (
    <>
      <div className="flex flex-col text-center align-middle bg-gray-100 w-full">
        <div className="px-6 md:max-3xl:w-4/6 mx-auto">
          <div className="flex flex-col text-center sm:max-3xl:grid sm:max-3xl:grid-cols-2 justify-center">
            <div className="mt-10 mx-auto text-left sm:max-3xl:w-3/4">
              <h2
                className="font-medium text-left mt-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1.6rem" }}
              >
                {title}
              </h2>
              <p
                className="mt-6"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem" }}
              >
                {paragraph}
              </p>
            </div>
            <img
              className=" mt-6 rounded lg:max-3xl:w-80  sm:max-3xl:mt-10 w-full mx-auto sm:max-lg:mt-20 "
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                border: "1px solid rgba(0, 0, 0, 0.24)",
                borderTop: "1px solid rgba(0, 0, 0, 0.089)",
              }}
              src={image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

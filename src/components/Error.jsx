import React from "react";

const Error = () => {
  return (
    <>
      <section className="h-screen">
        <div className="flex items-center justify-center h-screen flex-col">
          <h1 className="text-6xl">Error 404</h1>
          <br />
          <p className="text-2xl">Page Not Found</p>
          <br />
          <br />
          <a
            href="/"
            className="bg-[#576cbc] font-bold py-2 px-4 rounded-full inline-block"
          >
            Go Home
          </a>
        </div>
      </section>
    </>
  );
};

export default Error;

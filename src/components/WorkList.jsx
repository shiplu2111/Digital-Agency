import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("Something went wrong please try again");
  }
  return res.json();
}
const WorkList = async () => {
  const data= await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Build &amp; Launch without problems
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
               {
              data.map((item,i)=>{
                return(
                  <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                  {item.step}
                </span>
                <h4 className="mb-4 text-2xl font-bold font-heading">
                  {item.title}
                </h4>
                <p className="text-gray-500 leading-loose">
                {item.des}
                </p>
              </div>
                )})}
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkList;

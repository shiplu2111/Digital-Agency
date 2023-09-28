import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("Something went wrong please try again");
  }
  return res.json();
}
const TeamList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-12 text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap">
              {
                data.map((item,i)=>{
                  return(
                    <div key={i} className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                <div className="pb-8 bg-white rounded shadow text-center overflow-hidden">
                  <img
                    className="mb-8 w-full h-64 object-cover"
                    src={item.image}
                    alt=""
                  />
                  <h4 className="mb-2 text-2xl font-bold font-heading">
                    {item.name}
                  </h4>
                  {/* <p className="text-gray-500">CEO</p> */}
                </div>
              </div>
                  )
                })
              }
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamList;

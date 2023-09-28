async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Something went wrong please try again");
  }
  return res.json();
}

const Brand = async () => {
  const data=await getData();
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            {
              data.map((item,i)=>{
                return(
                  <div key={i} className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                  <div className="py-16 bg-gray-50 rounded">
                    <a href="#">
                      <img
                        className="mx-auto h-8"
                        src={item.image}
                        alt={item.name}
                      />
                    </a>
                  </div>
                </div>
                )
              })
            }
           
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;

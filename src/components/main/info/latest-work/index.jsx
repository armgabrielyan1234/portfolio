export default function LatestWork() {
  return (
    <div>
      <div className="text text-yellow-200 text-6xl sm:text-8xl font-extrabold">
        Latest Work
      </div>
      <div className="mt-10">
        <div className="w-screen flex flex-wrap gap-2  sm:gap-5 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-[350px] sm:w-[600px] h-[850px] sm:h-[650px] border-2 flex p-2  border-black rounded-2xl gap-2"
            >
              <div>
                <img
                  className="w-full h-[55%] object-cover rounded-3xl scale-90 transition-all   hover:scale-100"
                  src="https://img.freepik.com/premium-photo/beautiful-coffee_39901-32.jpg"
                  alt=""
                />
                <span className=" text-2xl sm:text-3xl ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Modal({ setOpenModal }) {
  return (
    <div className="w-screen flex absolute justify-center items-center h-screen bg-yellow-200 bg-opacity-50">
      <div className="w-[30%] pb-5 bg-yellow-100 border-2 border-black  ">
        <div className="w-full flex justify-end">
          <img
            src="/media/photo/close.png"
            className="w-8 h-8 m-2"
            alt=""
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
        <form className="flex  items-center h-full flex-col space-y-2">
          <div className="mb-10 flex space-x-10 ">
            <h1 className="text-4xl">Contact me</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-2xl">
              Name
            </label>
            <input
              type="text"
              className="border-2  p-2 border-black w-[300px] rounded-2xl"
              placeholder="Name Surname"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-2xl">
              Number
            </label>
            <input
              type="text"
              className="border-2  p-2 border-black w-[300px] rounded-2xl"
              placeholder="+374"
            />
          </div>
          <a
            href="/"
            onClick={() => {
              setOpenModal(false);
            }}
            class="relative rounded px-5 py-2.5 overflow-hidden group bg-yellow-300  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Send</span>
          </a>
        </form>
      </div>
    </div>
  );
}

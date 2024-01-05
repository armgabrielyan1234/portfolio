export default function Header() {
  return (
    <div className="h-[80px]  flex justify-around items-center">
      <div
        className="text text-blue-950 text-2xl font-bold"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Arman Gabrielyan
      </div>
      <div className="flex space-x-8">
        <div className="text text-blue-950 text-xl hover:text-2xl transition-all">
          Home
        </div>
        <div
          className="text text-blue-950 text-xl hover:text-2xl transition-all"
          onClick={() => {
            window.scrollTo({
              top: 1150,
              behavior: "smooth",
            });
          }}
        >
          About
        </div>

        <div
          className="text text-blue-950 text-xl hover:text-2xl transition-all"
          onClick={() => {
            window.scrollTo({
              top: 1830,
              behavior: "smooth",
            });
          }}
        >
          Work
        </div>
      </div>
      <div className="flex space-x-5">
        <div>
          <img className="w-10" src="/media/photo/facebook.png" alt="" />
        </div>
        <div>
          <img className="w-10" src="/media/photo/instagram.png" alt="" />
        </div>
        <div>
          <img className="w-10" src="/media/photo/telegram.png" alt="" />
        </div>
      </div>
    </div>
  );
}

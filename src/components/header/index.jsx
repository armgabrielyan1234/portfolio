export default function Header() {
  return (
    <div className="h-[80px]  flex justify-around items-center">
      <div className="text text-blue-950 text-2xl font-bold">
        Arman Gabrielyan
      </div>
      <div className="flex space-x-5">
        <div className="text text-blue-950 text-xl">Home</div>
        <div className="text text-blue-950 text-xl">About</div>
        <div className="text text-blue-950 text-xl">Work</div>
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

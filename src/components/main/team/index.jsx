export default function Team() {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center w-screen h-[400px]"
      style={{ backgroundImage: "url(/media/photo/team.jpg)" }}
    >
      <div className="justify-center flex flex-wrap items-center h-full flex-col">
        <span className="font-bold text-4xl  leading-5 tracking-wider uppercase text-white  ">
          Its my team
        </span>
        <span className="font-normal text-2xl leading-5  text-gray-200 mt-5">
          we are a very good team, we are very friendly and can cope with any
          task
        </span>
      </div>
    </div>
  );
}

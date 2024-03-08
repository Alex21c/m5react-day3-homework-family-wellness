export default function HeaderSection(){

  
  return (
    <header className="flex flex-col gap-[2rem]">
      <div>
      <h1 className={`text-[#9A1F48] text-[3rem] font-semibold`}>Family Wellness</h1>
      <h2 className={`text-[#A3A29E] font-semibold text-[2rem]  uppercase`}>Massage Therapy</h2>
      </div>
      <ul id='primaryNavigation' className={`bg-[#A5A19C]  flex uppercase text-[1.3rem] font-semibold justify-between`}>
        <li className={`bg-[#9A1F48] `}>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
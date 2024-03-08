export default function HeaderSection({metaData}){
  let {colors} = metaData;
  
  return (
    <header className="flex flex-col gap-[2rem]">
      <div>
      <h1 className={'text-[' + colors.pinkRed + '] text-[3rem] font-semibold'}>Family Wellness</h1>
      <h2 className={'text-[' + colors.gray + '] font-semibold text-[2rem]  uppercase'}>Massage Therapy</h2>
      </div>
      <ul id='primaryNavigation' className={`bg-[${colors.testGray}]  flex uppercase text-[1.3rem] font-semibold justify-between`}>
        <li className={`bg-[${colors.pinkRed}] `}>
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
import imgFamilyWellness from '../Assests/Images/familyWellness.jpg'

export default function BodySection(){
  return (
    <div className='flex flex-col items-center'>
      <div id='containerImgFamilyWellness' className='mt-[1rem] w-[95%] h-[40rem] rounded-md overflow-hidden relative'>     
        <div className='flex gap-[2rem] absolute bottom-[1rem] right-[1rem] text-white font-extrabold	 text-[1.5rem] cursor-pointer'>
          <i class="fa-solid fa-chevron-left hover:text-[#9A1F48] transition" title='previous image'></i>
          <i class="fa-solid fa-chevron-right hover:text-[#9A1F48] transition" title='next image'></i>

        </div>   
      </div>

      <div className='bg-[#9A1F48] text-white flex flex-col gap-[2rem] items-center p-[2rem] mt-[1rem] rounded-md w-[100%]'>
        <h2 className='text-[2.8rem] '>Think Health, Think Massage.</h2>
        <p className='max-w-[50rem] text-center font-medium'>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 99999-88888 today!</p>
        <ul className='flex  gap-[1rem]'>
          <li className='uppercase font-medium  border-solid border-2 rounded-sm border-white pt-[.5rem] pb-[.5rem] p-[1rem]'><a href="#">Learn more about us</a></li>
          <li className=' uppercase font-medium border-solid border-2 rounded-sm border-white pt-[.5rem] pb-[.5rem] p-[1rem]'><a href="#">Contact us today</a></li>
        </ul>
      </div>

      <div className='flex flex-col border-b-2 border-[#B7B7B7] w-[100%]  p-[3rem] gap-[1.5rem] text-[1.1rem] font-medium items-center'>
        <p className='text-[#9A1F48] font-medium max-w-[65rem]'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
        <p className='max-w-[65rem] text-slate-600'>We are committed to your long term health and well-being. our multi-disciplinary clinic provides a balances approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>        
        <p className='max-w-[65rem] text-slate-600'>We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
      </div>

      <div className='flex flex-col p-[2rem] gap-[1rem]'>
        <h2 className='text-[#9A1F48] text-[1.8rem] font-medium'>Family Wellness Massage Therapy</h2>
        <p className='text-slate-600 text-center'>9876 Main Street, Suite 123, Mainland, ML12345<br/> Phone: 987 645 3210</p>
      </div>
    </div>
  );
}
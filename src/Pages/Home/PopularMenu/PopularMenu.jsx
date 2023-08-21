
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import check from '../../../assets/home/---Check it out---.png'
import MenuItem from '../../../Components/Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems=data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
   const [menu]=useMenu();
   const popular=menu.filter(item=> item.category === 'popular') 
  return (
    <section>
        <SectionTitle subHeading={check} heading={"from our menu"}/>
        <div className='grid grid-cols-2 gap-3 my-10'>
            {
                popular?.map(item=><MenuItem key={item._id} item={item}/>)
            }
        </div>
        <div className='flex justify-center items-center'>
        <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </div>
        
    </section>
  )
}

export default PopularMenu
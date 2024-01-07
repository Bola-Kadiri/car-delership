



import * as RiIcons from 'react-icons/ri';
import PriceSlider from '../Slider/PriceSlider';
import YearSlider from '../Slider/YearSlider';







export const SidebarData = [
  {
    title: 'Price Range',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: <PriceSlider/>,
      },
    
    ]
  },
  {
    title: 'Year',
   
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: <YearSlider/>
       
      },
     
    ]
  },
 
  {
    title: 'Categories',
  

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Saloon Car for Sale',
    
       
      },
      {
        title: 'Utility Car for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'SUVs for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Convertible Car for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Chic Magnet Car for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Sport Car for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Statement Car for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Vintage Car for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Buses for Sale',
        path: '/foreign-car',
  
      },
      {
        title: 'Starter Car for Sale',
        path: '/foreign-car',
  
      }
    ]
  },
  {
    title: 'Manufacturers',
  

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Toyota',
        path: '/foreign-car',
       
      },
      {
        title: 'Honda',
        path: '/foreign-car',
  
      },
      {
        title: 'Luxus',
        path: '/foreign-car',
  
      },
      {
        title: 'Nissan',
        path: '/foreign-car',
  
      },
      {
        title: 'Hyundai',
        path: '/foreign-car',
  
      },
         {
        title: 'Ford',
        path: '/foreign-car',
  
      },
      {
        title: 'Mercedes-Benz',
        path: '/foreign-car',
  
      }
    ]
  }
];
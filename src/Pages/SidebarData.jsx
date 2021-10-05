import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Products',
      path: '/Product',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'stock',
      path: '/stock',
      icon: <IoIcons.IoIosAlbums />,
      cName: 'nav-text'
    },
    {
      title: 'Order list',
      path: '/order',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'deliver',
      path: '/deliver',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Supllier',
      path: '/Supllier',
      icon: <IoIcons.IoIosNotifications />,
      cName: 'nav-text'
    },
    {
      title: 'FeedBack',
      path: '/GetFeedback',
      icon: <IoIcons.IoIosChatbubbles />,
      cName: 'nav-text'
    },
    {
      title: 'Pharmacy',
      path: '/pharma',
      icon: <IoIcons.IoIosAnalytics />,
      cName: 'nav-text'
    },
    {
      title: 'request Supplier',
      path: '/ContactSupllier',
      icon: <IoIcons.IoIosArrowUp />,
      cName: 'nav-text'
    },

    {
      title: 'Get request Supplier',
      path: '/GetContact',
      icon: <IoIcons.IoIosAperture />,
      cName: 'nav-text'
    },




    
  ];
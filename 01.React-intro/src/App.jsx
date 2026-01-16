import { useState } from 'react'

import './App.css'
import Home from './components/Home';
import About from './components/about';
import Contact from './components/Contact';
import Service from './components/Service';
import Header  from './assets/layout/Header';
import Footer from './assets/layout/Footer';

function App() {


const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Web Development",
    description: "Modern, responsive websites built with the latest technologies",
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces that convert",
  },
  {
    id: 4,
    icon: "💡",
    title: "Consulting",
    description: "Strategic technology consulting for your business",
  },
];
  return (
    <>
<Header/>
<Home/>
<About/>
<Service services={services}/>
<Contact/>
<Footer/>


    </>
  )
}

export default App

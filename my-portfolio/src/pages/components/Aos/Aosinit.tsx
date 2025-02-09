
import { useEffect } from "react";
import aos from 'aos';
import 'aos/dist/aos.css';

export default function Aosinit (){

  useEffect(() => {
    aos.init({
      duration: 800,
      once: true
    });
  }, []);

  return null;
}
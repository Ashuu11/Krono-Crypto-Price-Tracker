import Image from 'next/image'
import crypt from '../assets/Crypto.png'
const LogoMain = (props) => {
  return (
    <Image
      src={crypt}
      alt="Currency"
      width="350px"
      height="300px" 
  />
  );
}

export default LogoMain;
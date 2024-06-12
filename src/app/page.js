
import Image from 'next/image';
import HomeImage from '../assets/images/home.png'
import Link from 'next/link';

export default function Home() {
  return (
    <main >
      <div className="d-flex justify-content-center align-items-center w-100 flex-column gap-1">

        <Image src={HomeImage} alt='not fond' className='fluid w-75 h-100'></Image>
        <Link href='./landingPage' className='LinkButton'>Go to Home page</Link>
      </div>
    </main>
  );
}

'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import { useHomeController } from './useHomeController';

const Home = () => {
  const { languageValue } = useHomeController();

  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <Link href={`/${languageValue}/play?difficulty=easy`}>
        <Button variant="secondary">Easy</Button>
      </Link>
      <Link href={`/${languageValue}/play?difficulty=hard`}>
        <Button variant="secondary">Hard</Button>
      </Link>
    </div>
  );
};

export default Home;

'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import { useHomeController } from './useHomeController';
import { useTranslations } from 'next-intl';

const Home = () => {
  const { language } = useHomeController();
  const t = useTranslations('difficulty');

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-10">
      <h1 className="uppercase text-5xl text-white font-bold">{t('title')}</h1>

      <div className="flex justify-center items-center gap-3 bg-tertiary">
        <Link href={`/${language}/play?difficulty=easy`}>
          <Button variant="secondary">{t('easy')}</Button>
        </Link>
        <Link href={`/${language}/play?difficulty=hard`}>
          <Button variant="secondary">{t('hard')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

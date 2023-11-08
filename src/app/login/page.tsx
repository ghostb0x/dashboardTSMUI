'use client';
import Image from 'next/image';
import styles from '../page.module.css';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import Login from '@/components/Login';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <main className={styles.main}>
      <Header />
      {session ? (
        <>
          <SideMenu />
        </>
      ) : null}
      <Login />
    </main>
  );
}

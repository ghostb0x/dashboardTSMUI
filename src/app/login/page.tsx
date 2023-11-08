'use client';
import Image from 'next/image';
import styles from '../page.module.css';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';
import Login from '@/components/Login';

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <Header />
      <SideMenu />
      <Login />
    </main>
  );
}

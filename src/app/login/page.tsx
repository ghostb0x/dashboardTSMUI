import Image from 'next/image';
import styles from '../page.module.css';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';

export default function Login() {
  return (
    <main className={styles.main}>
      <Header /> 
      <SideMenu />
        
    </main>
  );
}

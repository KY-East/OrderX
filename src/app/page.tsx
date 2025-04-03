import { redirect } from 'next/navigation';

export default function Home() {
  // 默认重定向到英文版本
  redirect('/en');
} 
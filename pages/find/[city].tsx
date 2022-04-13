import { useRouter } from 'next/router';

export default function Find() {
  const router = useRouter();
  const city = router.query.city;

  return <h1>Descobrir em {city}</h1>;
}

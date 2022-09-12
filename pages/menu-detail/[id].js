import { useRouter } from "next/router";

export default function MenuDetailPage() {
  const router = useRouter();
  const id = Number(router.query.id);
  if (Number.isNaN(id)) {
    return null;
  }
  return <div>{id}</div>;
}

import { useRouter } from "next/router";
import MenuDetail from "../../src/component/MenuDetail";

export default function MenuDetailPage() {
  const router = useRouter();
  const id = Number(router.query.id);
  console.log("Type", typeof id);
  if (Number.isNaN(id)) {
    return null;
  }
  console.log("Router.Query", router.query);

  return (
    <div>
      <MenuDetail id={id} />
    </div>
  );
}

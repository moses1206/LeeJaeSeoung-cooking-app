export async function sleep() {
  await new Promise((res) => setTimeout(res, 500));
}

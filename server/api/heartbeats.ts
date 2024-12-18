export default defineEventHandler((event) => {
  console.log("heartbeats" + new Date().toLocaleDateString());
  return "heartbeats";
});

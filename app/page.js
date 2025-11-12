import Feeds from "./componet/Feeds";
import Rightbar from "./componet/Rightbar";
import Sidebar from "./componet/Sidebar/Sidebar";
import Topbar from "./componet/Topbar";

export default function Home() {
  return (
    <>
     <Topbar/>
      <main className="flex" >
      <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </main>
    </>
  );
}

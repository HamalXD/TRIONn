import DraggableCards from "@/components/DragableCards";
import AwardCards from "@/pages/AwardCards/AwardCards";
import HomePage from "@/pages/Home/HomePage";
import Partners from "@/pages/Partners/Partners";
import RecentWorks from "@/pages/RecentWorks/RecentWorks";
import WhoAreWe from "@/pages/WhoAreWe/WhoAreWe";

export default function Home() {
  return (
    <>
      <HomePage />
      <RecentWorks />
      <WhoAreWe />
      <AwardCards />
      <Partners />
      <DraggableCards />
    </>
  );
}

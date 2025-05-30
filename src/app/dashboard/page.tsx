import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";
import React from "react";
import QuizCreateCard from "@/components/dashboards/QuizCreateCard";
import HistoryCard from "@/components/dashboards/HistoryCard";
import HotTopicsCard from "@/components/dashboards/HotTopicsCard";
import RecentActivityCard from "@/components/dashboards/RecentActivityCard";
import DetailsDialog from "@/components/DetailsDialog";

type Props = {};

export const metadata = {
  title: "Dashboard | Quiz As a Fun",
};

const Deshboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        {/* <DetailsDialog /> */}
      </div>
      {/* second section  */}
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizCreateCard />
        <HistoryCard />
      </div>
      {/* third section  */}
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Deshboard;

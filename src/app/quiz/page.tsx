import QuizCreation from "@/components/forms/QuizCreation";
import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";
import { title } from "process";
import React from "react";

type Props = {};
const metadata = {
    title: "Quiz | Quiz As a Fun",
};
const QuizPage = async (props: Props) => {
    const session = await getAuthSession();
    if(!session?.user){
        return redirect("/")
    }
    return (
        <QuizCreation/>
    )
};

export default QuizPage;

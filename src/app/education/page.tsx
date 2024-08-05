import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Feb 2017 -  Dec 2020
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Diploma in Information Communications Technology, <br /> Vaal University of Technology
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs pt-2">
              <ul className="list-disc ml-10">
                <li>
                  
                  Completed a diploma in IT with a focus on business analysis, including coursework in business 
process analysis, systems analysis and design, data analysis, project management, and business 
strategy and operations.
                  
                </li>
                <li>
                Understanding of software development principles and design, including experience in designing 
                and implementing software systems that meet the needs of businesses and organizations.

                </li>
                <li>
                Knowledge of project management principles and practices, including the ability to plan, 
                execute, and control projects to meet timelines and budgets.

                </li>
                <li>
                Strong communication and interpersonal skills, including ability to present complex technical 
                information to non-technical stakeholders.
                </li>
              </ul>
            <br/>




            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;

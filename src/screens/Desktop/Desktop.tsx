import { Card, CardContent } from "../../components/ui/card";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection";
import { GroupWrapperSubsection } from "./sections/GroupWrapperSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";

const sections = [
  { id: "frame", component: FrameSubsection },
  { id: "group-wrapper", component: GroupWrapperSubsection },
  { id: "frame-wrapper", component: FrameWrapperSubsection },
  { id: "div-wrapper", component: DivWrapperSubsection },
  { id: "div", component: DivSubsection },
  { id: "section-component-node", component: SectionComponentNodeSubsection },
  { id: "frame-1", component: Frame1Subsection },
  { id: "frame-2", component: Frame2Subsection },
];

export const Desktop = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto flex w-full flex-col items-stretch">
        {sections.map(({ id, component: SectionComponent }) => (
          <section key={id} className="relative w-full">
            <Card className="h-auto w-full rounded-none border-0 shadow-none">
              <CardContent className="p-0">
                <SectionComponent />
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </main>
  );
};

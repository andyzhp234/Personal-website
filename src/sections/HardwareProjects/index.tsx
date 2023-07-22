import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import Project from "../../components/Project";
import ImgBreadboardComputer from "../../assets/images/img-8-bit-computer-1.jpg";


export default function HardwareProjects({ projectRef }: { projectRef: any }) {
  return (
    <div ref={projectRef}>
      <SectionContainer>
        <SectionTitle>Embedded & Hardware Projects:</SectionTitle>
        <div className="flex flex-col justify-center">
          <Project
            title="8-bit Breadboard Computer"
            type="Computer Engineering"
            description="I successfully built an 8-bit Breadboard Computer from scratch. This unique project involved assembling various modules like a clock module, registers, an Arithmetic Logic Unit (ALU), and more on a breadboard, using only basic digital logic chips. The computer follows SAP-1 design, which is a simplified representation of the Von Neumann architecture, and is capable of running basic programs and demonstrates fundamental concepts of computer"
            projectImg={ImgBreadboardComputer}
            demoURL="https://www.youtube.com/watch?v=goVngIlzJSU"
            githubURL="https://github.com/andyzhp234/8-Bit-Breadboard-Computer"
          />
        </div>
      </SectionContainer>
    </div>
  );
}

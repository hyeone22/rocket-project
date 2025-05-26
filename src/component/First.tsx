import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface SpeechBubbleProps {
  text: string[];
  position: React.CSSProperties;
}

const SpeechBubble = ({ text, position }: SpeechBubbleProps) => (
  <div
    className={clsx(
      "absolute text-center flex flex-col justify-center items-center font-bold",
      "text-[16px] xs:text-[12px]"
    )}
    style={{
      ...position,
      transform: "translate(-50%, -50%)",
    }}
  >
    {text.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
);

function First() {
  const speechBubbles: SpeechBubbleProps[] = [
    {
      text: ["이제 본격적으로", "OO님의 사주팔자를", "분석해볼 차례네요."],
      position: { top: "49.7%", left: "36%" },
    },
    {
      text: ["제가 oo님의 사주를", "보기 쉽게 표로 정리했어요"],
      position: { bottom: "22.3%", left: "39%" },
    },
  ];

  return (
    <div className="w-full relative">
      <Image
        src="/happy.png"
        alt="제1장 사주팔자"
        width={448}
        height={448}
        className="w-full h-auto"
        style={{ objectFit: "contain" }}
        priority
      />
      {speechBubbles.map((bubble, index) => (
        <SpeechBubble key={index} {...bubble} />
      ))}
    </div>
  );
}

export default First;

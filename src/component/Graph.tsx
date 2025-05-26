import React from "react";
import { sajuData, headers, type SajuCell } from "@/data/sajuData";
import clsx from "clsx";

function Cell({ data }: { data: SajuCell }) {
  if (data.type === "box") {
    const bgColorMap = {
      black: "bg-gray-800 text-white",
      red: "bg-red-700 text-white",
      teal: "bg-teal-600 text-white",
      white: "bg-white border-2 border-black",
    };

    return (
      <div className="w-full h-full flex items-center justify-center py-3">
        <div
          className={clsx(
            "w-[min(70px,15vw)] h-[min(70px,15vw)] rounded-xl flex flex-col items-center justify-center",
            bgColorMap[data.color || "black"]
          )}
        >
          <span className="text-[min(0.75rem,3vw)] mt-1">{data.korean}</span>
          <span className="text-[min(1.25rem,4vw)] font-bold">
            {data.value}
          </span>
          <span className="text-[min(0.75rem,3vw)]">{data.subValue}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-3">
      {data.value.split("\n").map((line, i) => (
        <div key={i} className="text-center">
          {line}
          <div className="text-xs text-gray-600">
            {data.subValue?.split("\n")[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

function Graph() {
  return (
    <div className="relative w-full h-full bg-[#F5F3EC]">
      {/* 외부 테두리 */}
      <div className="absolute inset-0 border-[3px] border-black" />

      {/* 내부 테두리 라인들 */}
      <div className="absolute top-[8px] left-0 right-0 h-[1px] bg-[#1B2F49]" />
      <div className="absolute bottom-[8px] left-0 right-0 h-[1px] bg-[#1B2F49]" />
      <div className="absolute left-[8px] top-0 bottom-0 w-[1px] bg-[#1B2F49]" />
      <div className="absolute right-[8px] top-0 bottom-0 w-[1px] bg-[#1B2F49]" />

      {/* 컨텐츠 */}
      <div className="relative w-full h-full p-4">
        {/* 헤더 */}
        <div className="w-full flex flex-col justify-center items-center font-bold gap-3 my-6">
          <h2 className="text-base">김로켓님의 사주</h2>
          <p className="text-xl">1980년 8월 27일 08:10</p>
        </div>
        {/* 표 */}
        <div className="grid grid-cols-5 border border-t-0 border-l-0 border-black">
          {/* 헤더 */}
          <div className="border-b border-black min-h-[60px] flex items-center justify-center py-3" />
          {headers.map((header) => (
            <div
              key={header}
              className="text-center text-3xl min-h-[60px] flex items-center justify-center py-3 border-b border-l border-black"
            >
              {header}
            </div>
          ))}

          {/* 데이터 행들 */}
          {sajuData.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div
                className={clsx(
                  "min-h-[80px] flex flex-col items-center justify-center py-3 border-black",
                  rowIndex > 0 && "border-t"
                )}
              >
                <div className="text-sm">{row.title.text}</div>
                <div className="text-xs text-gray-600">
                  ({row.title.subText})
                </div>
              </div>
              {row.cells.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={clsx(
                    "min-h-[80px] flex items-center justify-center border-l border-black",
                    rowIndex > 0 && "border-t"
                  )}
                >
                  <Cell data={cell} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graph;

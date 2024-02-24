import React from "react";

function CourseEnroll({courseInfo}) {
  const member = false;

  return (
    <div className="p-2 text-center rounded-lg bg-sky-700 flex flex-col gap-3">
      <h2 className="text-[22px] font-bold text-white">Kursa Hemen Kaydol!</h2>
      {(member || courseInfo.free) ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Şimdi kaydolun ve öğrenmeye başlayın!
          </h2>
          <button className="bg-white text-purple-700 hover:bg-white hover:text-purple-700">
            Kaydolun
          </button>
        </div>
      ) :  (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Şimdi üye olun ve öğrenmeye başlayın!
          </h2>
          <button className="bg-white text-indigo-800 hover:bg-white hover:text-purple-700 font-semibold">
            Sadece $10 üye olun!
          </button>
        </div>
      )}
    </div>
  );
}

export default CourseEnroll;

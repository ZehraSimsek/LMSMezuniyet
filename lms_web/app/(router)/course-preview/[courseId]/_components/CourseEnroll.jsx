import React from "react";

function CourseEnroll() {
  const member = false;
  return (
    <div className="p-3 text-center rounded-sm bg-fuchsia-700 flex flex-col gap-3">
      <h2 className="text-[22px] font-bold text-white">Kursa Hemen Kaydol!</h2>
      {member ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Şimdi kaydolun ve öğrenmeye başlayın!
          </h2>
          <button className="bg-white text-purple-700 hover:bg-white hover:text-purple-700">
            Kaydolun
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Şimdi üye olun ve öğrenmeye başlayın!
          </h2>
          <button className="bg-white text-purple-700 hover:bg-white hover:text-purple-700">
            Sadece $10 üye olun!
          </button>
        </div>
      )}
    </div>
  );
}

export default CourseEnroll;

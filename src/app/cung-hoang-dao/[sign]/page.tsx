import Link from "next/link";
import { notFound } from "next/navigation";
import { getZodiacBySlug } from "../../../lib/zodiacData";

interface Props {
  params: {
    sign: string;
  };
}

export default function ZodiacDetailPage({ params }: Props) {
  const zodiac = getZodiacBySlug(params.sign);

  if (!zodiac) {
    notFound();
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center ">
          <Link
            href="/cung-hoang-dao"
            className="inline-flex items-center text-gray-300 hover:text-golden transition-colors"
          >
            <span className="mr-2">←</span>
            Quay lại danh sách cung hoàng đạo
          </Link>
          <div className=" relative">
            <div className="relative w-100 h-100 mx-auto opacity-20 ">
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "30s" }}
              >
                <img src="/2.png" alt="" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "15s" }}
              >
                <img src="/3.png" alt="" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "7s" }}
              >
                <img src="/4.png" alt="" />
              </div>
            </div>
            <div
              className={`w-24 h-24 top-1/4 right-1/2 transform translate-x-1/2 bg-gradient-to-br absolute from-amber-500 to-amber-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl`}
            >
              <div>
                <span className="text-4xl text-white">
                  <img src={zodiac.icon} alt={zodiac.name} />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
                  {zodiac.name}
                </span>
              </h1>
              <p className="text-2xl text-gray-300 mb-4">{zodiac.dates}</p>
              <div className="flex justify-center items-center space-x-6 text-gray-300">
                <span>
                  Nguyên tố:{" "}
                  <strong className="text-golden">{zodiac.element}</strong>
                </span>
                <span>•</span>
                <span>
                  Hành tinh:{" "}
                  <strong className="text-golden">
                    {zodiac.ruling_planet}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Personality */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personality Section */}
            <div className="cosmic-card hoverable rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">
                  <img src="/eye-icon.svg" className="size-10" alt="" />
                </span>
                Tính Cách
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">
                    Điểm Mạnh
                  </h3>
                  <ul className="space-y-2">
                    {zodiac.personality.strengths.map((strength, index) => (
                      <li
                        key={index}
                        className="flex items-start text-purple-200"
                      >
                        <span className="text-golden mr-2">✦</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">
                    Điểm Cần Cải Thiện
                  </h3>
                  <ul className="space-y-2">
                    {zodiac.personality.weaknesses.map((weakness, index) => (
                      <li
                        key={index}
                        className="flex items-start text-purple-200"
                      >
                        <span className="text-orange-400 mr-2">⚠</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-purple-300/20">
                <h3 className="text-xl font-bold text-golden mb-3">
                  Đặc Điểm Nổi Bật
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {zodiac.personality.traits.map((trait, index) => (
                    <div
                      key={index}
                      className="flex items-center text-purple-200"
                    >
                      <span className="text-golden mr-2">🌟</span>
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Love Section */}
            <div className="cosmic-card hoverable rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3"><img src="/male-and-female-signs-svgrepo-com.svg" className="size-10" alt="" /></span>
                Tình Yêu & Hôn Nhân
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">
                    Phong Cách Yêu
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {zodiac.love.love_style}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">
                    Người Bạn Đời Lý Tưởng
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {zodiac.love.ideal_partner}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">
                    Cung Hợp
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {zodiac.love.compatibility.map((sign, index) => (
                      <span
                        key={index}
                        className="bg-golden/20 text-golden px-3 py-1 rounded-full"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-900/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    💡 Lời Khuyên
                  </h4>
                  <p className="text-purple-200">
                    {zodiac.love.relationship_advice}
                  </p>
                </div>
              </div>
            </div>

            {/* Career Section */}
            <div className="cosmic-card hoverable rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">💼</span>
                Sự Nghiệp & Tài Chính
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">
                    Nghề Nghiệp Phù Hợp
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {zodiac.career.suitable_jobs.map((job, index) => (
                      <div
                        key={index}
                        className="bg-purple-900/30 rounded-lg p-3 text-center"
                      >
                        <span className="text-purple-200">{job}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-golden mb-3">
                      Phong Cách Làm Việc
                    </h3>
                    <p className="text-purple-200">
                      {zodiac.career.work_style}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-golden mb-3">
                      Khả Năng Lãnh Đạo
                    </h3>
                    <p className="text-purple-200">
                      {zodiac.career.leadership}
                    </p>
                  </div>
                </div>

                <div className="bg-golden/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    💰 Quản Lý Tài Chính
                  </h4>
                  <p className="text-purple-200">
                    {zodiac.career.money_management}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Lucky Numbers & Colors */}
            <div className="cosmic-card hoverable rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-6 h-6 text-white"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style type="text/css"> </style>{" "}
                      <g>
                        {" "}
                        <path d="M495.037,198.99c-7.773-11.85-17.919-21.956-29.752-29.736c1.427-6.872,2.204-13.85,2.204-20.836 c0.032-26.502-10.211-53.182-30.472-73.451c-20.245-20.244-46.917-30.48-73.411-30.465c-6.994,0-13.988,0.794-20.869,2.212 c-7.772-11.824-17.887-21.97-29.735-29.751C296.664,6.241,276.986-0.008,256.012,0c-20.982-0.008-40.668,6.241-57.007,16.963 c-11.849,7.78-21.963,17.918-29.743,29.751c-6.881-1.418-13.867-2.212-20.861-2.212c-26.494-0.016-53.165,10.212-73.41,30.465 c-20.261,20.261-30.505,46.941-30.48,73.442c0,6.994,0.786,13.972,2.212,20.853c-11.841,7.772-21.98,17.887-29.752,29.735 C6.249,215.336-0.008,235.014,0,255.988c-0.008,20.982,6.248,40.66,16.962,56.999c7.78,11.856,17.919,21.979,29.76,29.751 c-1.426,6.881-2.212,13.859-2.212,20.853c-0.025,26.494,10.22,53.174,30.465,73.418h0.008 c20.254,20.261,46.933,30.497,73.435,30.481c6.986,0,13.972-0.794,20.845-2.205c7.764,11.833,17.878,21.972,29.727,29.744 c16.339,10.73,36.017,16.979,57.007,16.971c20.99,0.008,40.668-6.241,57.006-16.971c11.848-7.772,21.972-17.911,29.744-29.744 c6.872,1.411,13.85,2.205,20.844,2.205c26.502,0.016,53.182-10.22,73.427-30.481c20.261-20.244,30.505-46.933,30.472-73.434 c0-6.986-0.778-13.956-2.204-20.837c11.833-7.772,21.979-17.878,29.76-29.727c10.714-16.347,16.971-36.033,16.955-57.023 C512.016,235.005,505.759,215.319,495.037,198.99z M464.102,292.726c-6.905,10.52-16.695,18.948-28.147,24.102l-15.869,7.14 l6.168,16.274c2.82,7.464,4.246,15.39,4.246,23.333c-0.016,17.092-6.516,34.128-19.645,47.273 c-13.146,13.129-30.181,19.629-47.265,19.645c-7.95,0-15.868-1.426-23.341-4.255l-16.273-6.159l-7.149,15.868 c-5.155,11.452-13.575,21.249-24.103,28.147c-10.536,6.889-23.081,10.9-36.729,10.908c-13.648-0.008-26.178-4.012-36.714-10.908 c-10.527-6.898-18.948-16.695-24.11-28.147l-7.149-15.868l-16.273,6.159c-7.464,2.828-15.39,4.255-23.333,4.255 c-17.092-0.016-34.136-6.516-47.282-19.645h0.008c-13.13-13.146-19.621-30.173-19.637-47.258c0-7.95,1.426-15.876,4.255-23.348 l6.167-16.274l-15.868-7.14c-11.452-5.162-21.25-13.599-28.155-24.128c-6.888-10.535-10.9-23.072-10.908-36.713 c0.008-13.632,4.02-26.161,10.908-36.697c6.906-10.527,16.696-18.956,28.155-24.118l15.868-7.14l-6.167-16.274 c-2.829-7.472-4.255-15.399-4.255-23.349c0.016-17.092,6.516-34.12,19.653-47.281c13.13-13.122,30.157-19.613,47.241-19.63 c7.95,0,15.877,1.427,23.349,4.263l16.265,6.16l7.157-15.86c5.162-11.46,13.59-21.258,24.118-28.155 c10.544-6.897,23.074-10.901,36.722-10.909c13.64,0.008,26.169,4.012,36.705,10.909c10.519,6.896,18.956,16.695,24.118,28.155 l7.148,15.86l16.266-6.16c7.472-2.836,15.399-4.263,23.357-4.263c17.084,0.017,34.112,6.508,47.249,19.63 c13.129,13.161,19.629,30.197,19.645,47.289c0,7.942-1.426,15.877-4.246,23.341l-6.168,16.274l15.869,7.14 c11.452,5.154,21.25,13.583,28.147,24.103c6.889,10.535,10.892,23.065,10.909,36.713 C474.995,269.652,470.991,282.189,464.102,292.726z"></path>{" "}
                        <path d="M254.821,179.62c1.451-3.299,2.585-6.046,3.395-8.129c10.333-26.259,13.778-38.221,0.697-50.24 c-1.848-1.564-3.672-3.153-5.43-4.766c-1.686,1.719-3.412,3.372-5.187,4.993c-12.578,12.554-8.607,24.354,2.804,50.118 C252,173.678,253.273,176.377,254.821,179.62z"></path>{" "}
                        <path d="M192.287,200.391c2.066,0.802,4.887,1.832,8.275,2.998c-1.297-3.306-2.464-6.094-3.348-8.136 c-11.257-25.829-17.254-36.754-35.002-36c-2.4,0.218-4.799,0.372-7.189,0.446c-0.008,2.398-0.073,4.798-0.17,7.221 C154.844,184.701,166.004,190.228,192.287,200.391z"></path>{" "}
                        <path d="M179.587,257.187c-3.258-1.426-6.029-2.568-8.104-3.379c-26.243-10.349-38.205-13.81-50.232-0.737 c-1.556,1.856-3.136,3.679-4.766,5.454c1.718,1.661,3.38,3.412,4.993,5.187c12.529,12.546,24.362,8.598,50.134-2.804 C173.655,259.984,176.386,258.736,179.587,257.187z"></path>{" "}
                        <path d="M159.261,349.805c0.226,2.383,0.373,4.782,0.437,7.173c2.399,0,4.814,0.081,7.222,0.17 c17.773,0.007,23.308-11.144,33.495-37.435c0.818-2.082,1.864-4.927,3.023-8.315c-3.322,1.337-6.11,2.496-8.177,3.396 C169.432,326.018,158.507,332.04,159.261,349.805z"></path>{" "}
                        <path d="M257.195,332.364c-1.442,3.275-2.602,6.07-3.412,8.145c-10.317,26.25-13.77,38.213-0.69,50.24 c1.848,1.564,3.671,3.153,5.43,4.765c1.678-1.718,3.42-3.379,5.195-4.992c12.57-12.554,8.591-24.354-2.813-50.127 C260,338.329,258.735,335.59,257.195,332.364z"></path>{" "}
                        <path d="M256.012,221.616c-18.997,0-34.387,15.391-34.387,34.38s15.39,34.379,34.387,34.379 c18.98,0,34.371-15.39,34.371-34.379S274.993,221.616,256.012,221.616z"></path>{" "}
                        <path d="M352.747,162.211c-0.219-2.406-0.374-4.789-0.438-7.188c-2.398,0-4.814-0.081-7.229-0.178 c-17.765-0.008-23.292,11.144-33.496,37.451c-0.818,2.083-1.84,4.879-3.006,8.275c3.323-1.33,6.095-2.456,8.169-3.379 C342.583,185.957,353.493,179.952,352.747,162.211z"></path>{" "}
                        <path d="M319.713,311.577c-2.092-0.811-4.912-1.848-8.299-3.015c1.329,3.314,2.472,6.102,3.388,8.177 c11.249,25.837,17.246,36.754,34.995,36.008c2.398-0.219,4.798-0.381,7.188-0.446c0.008-2.408,0.073-4.806,0.187-7.238 C357.156,327.299,346.02,321.755,319.713,311.577z"></path>{" "}
                        <path d="M340.412,251.084c-2.075,0.883-4.798,2.164-8.007,3.712c3.274,1.442,6.046,2.585,8.129,3.395 c26.226,10.35,38.196,13.794,50.223,0.714c1.564-1.84,3.137-3.672,4.766-5.438c-1.719-1.67-3.38-3.403-4.992-5.178 C378,235.726,366.167,239.682,340.412,251.084z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
                May Mắn
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    Số May Mắn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac.lucky.numbers.map((number, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center text-purple-900 font-bold"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    Màu May Mắn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac.lucky.colors.map((color, index) => (
                      <span
                        key={index}
                        className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    Ngày May Mắn
                  </h4>
                  <div className="space-y-1">
                    {zodiac.lucky.days.map((day, index) => (
                      <div key={index} className="text-purple-200">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    Đá Quý
                  </h4>
                  <div className="space-y-1">
                    {zodiac.lucky.gemstones.map((stone, index) => (
                      <div
                        key={index}
                        className="text-purple-200 flex items-center"
                      >
                        <span className="mr-2">💎</span>
                        {stone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Health Section */}
            <div className="cosmic-card hoverable rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2"><img src="/health-filled-svgrepo-com.svg" alt="" className="w-10" /></span>
                Sức Khỏe
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    Bộ Phận Cần Chú Ý
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac.health.body_parts.map((part, index) => (
                      <span
                        key={index}
                        className="bg-red-900/30 text-red-200 px-3 py-1 rounded-full text-sm"
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">
                    Lời Khuyên Sức Khỏe
                  </h4>
                  <ul className="space-y-1">
                    {zodiac.health.health_tips.map((tip, index) => (
                      <li
                        key={index}
                        className="text-purple-200 text-sm flex items-start"
                      >
                        <span className="text-golden mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-lg p-3">
                  <h5 className="font-semibold text-green-300 mb-1">
                    Giảm Stress
                  </h5>
                  <p className="text-green-200 text-sm">
                    {zodiac.health.stress_management}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 Forecast */}
        <div className="cosmic-card hoverable rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🔮</span>
            Dự Báo Năm 2024
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">
                🌟 Tổng Quan
              </h3>
              <p className="text-purple-200 text-sm">
                {zodiac.forecast_2024.general}
              </p>
            </div>

            <div className="bg-pink-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-500 mb-2">
                <img src="/male-and-female-signs-svgrepo-com.svg" alt="" className="w-6 inline-block mr-2" /> Tình Yêu
              </h3>
              <p className="text-purple-200 text-sm">
                {zodiac.forecast_2024.love}
              </p>
            </div>

            <div className="bg-blue-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">
                💼 Sự Nghiệp
              </h3>
              <p className="text-purple-200 text-sm">
                {zodiac.forecast_2024.career}
              </p>
            </div>

            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">
                <img src="/health-filled-svgrepo-com.svg" alt="" className="w-6 inline-block mr-2" /> Sức Khỏe
              </h3>
              <p className="text-purple-200 text-sm">
                {zodiac.forecast_2024.health}
              </p>
            </div>

            <div className="bg-yellow-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">
                💰 Tài Chính
              </h3>
              <p className="text-purple-200 text-sm">
                {zodiac.forecast_2024.finance}
              </p>
            </div>

            <div className="bg-indigo-900/30 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <p className="text-purple-200 text-sm">
                  Năm may mắn và thịnh vượng
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <Link
            href="/cung-hoang-dao"
            className="bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Xem Tất Cả 12 Cung Hoàng Đạo
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all zodiac signs
export async function generateStaticParams() {
  const signs = [
    "bach-duong",
    "kim-nguu",
    "song-tu",
    "cu-giai",
    "su-tu",
    "xu-nu",
    "thien-binh",
    "ho-cap",
    "nhan-ma",
    "ma-ket",
    "bao-binh",
    "song-ngu",
  ];

  return signs.map((sign) => ({
    sign: sign,
  }));
}

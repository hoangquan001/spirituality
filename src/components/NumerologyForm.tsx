'use client';

import { useState } from 'react';

interface NumerologyFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  fullName: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
}

export default function NumerologyForm({ onSubmit }: NumerologyFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-400/20 h-fit">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <img src="/thansohoc.png" className='rounded-full' alt="" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Tính Thần Số Học</h2>
        <p className="text-gray-300">Nhập thông tin để khám phá số mệnh của bạn</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
            Họ và Tên *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-gray-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm"
            placeholder="Ví dụ: Nguyễn Văn An"
          />
        </div>

        {/* Birth Date */}
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-300 mb-2">
            Ngày Sinh *
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-gray-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm"
          />
        </div>

        {/* Birth Time */}
        <div>
          <label htmlFor="birthTime" className="block text-sm font-medium text-gray-300 mb-2">
            Giờ Sinh (tùy chọn)
          </label>
          <input
            type="time"
            id="birthTime"
            name="birthTime"
            value={formData.birthTime}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-gray-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm"
          />
        </div>

        {/* Birth Place */}
        <div>
          <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-300 mb-2">
            Nơi Sinh (tùy chọn)
          </label>
          <input
            type="text"
            id="birthPlace"
            name="birthPlace"
            value={formData.birthPlace}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-gray-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm"
            placeholder="Ví dụ: Hà Nội"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Khám Phá Số Mệnh</span>
            <span>✨</span>
          </span>
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        <p>🔒 Thông tin của bạn được bảo mật tuyệt đối</p>
      </div>
    </div>
  );
}

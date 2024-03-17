import { useState } from 'react';
import { useUser, useSignIn } from '@clerk/nextjs';

const ResetPassword = () => {
  const { user } = useUser();
  const signIn = useSignIn();
  const [formState, setFormState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formState.newPassword !== formState.confirmPassword) {
      alert('Yeni şifreler eşleşmiyor!');
      return;
    }
    try {
      await signIn.attemptPassword(user.primaryEmailAddress.emailAddress, formState.currentPassword);
      await user.updatePassword(formState.newPassword);
      alert('Şifreniz başarıyla güncellendi!');
    } catch (error) {
      alert('Mevcut şifre doğru değil, lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mevcut Şifre:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPassword ? 'text' : 'password'}
            name="currentPassword"
            value={formState.currentPassword}
            onChange={handleInputChange}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Yeni Şifre:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPassword ? 'text' : 'password'}
            name="newPassword"
            value={formState.newPassword}
            onChange={handleInputChange}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Şifreyi Onayla:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Gizle' : 'Göster'}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Şifreyi Değiştir
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

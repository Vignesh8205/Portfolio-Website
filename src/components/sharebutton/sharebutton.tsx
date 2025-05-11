import React, { useEffect, useState } from 'react';
import { MdShare } from 'react-icons/md';
import { numbers, socialmedialink } from '../../Data';

const ShareButton: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<string>('');

  useEffect(() => {
    const randomIndex: number = Math.floor(Math.random() * numbers.length);
    setSelectedNumber(numbers[randomIndex]);
  }, []);

const handleShare = async (): Promise<void> => {
  try {
    // Load the resume PDF
    const resumeResponse = await fetch('/Vignesh_Resume.pdf'); // ✅ Only works if it's in /public
    const resumeBlob = await resumeResponse.blob();
    const resumeFile = new File([resumeBlob], 'Vignesh_Resume.pdf', { type: 'application/pdf' });

    // Create a text file for the message
    const fullMessage = `
📢 Check out my portfolio and professional profiles! 

🌐 Website: ${socialmedialink.websiteUrl}
💼 LinkedIn: ${socialmedialink.linkedin}
🐱 GitHub: ${socialmedialink.github}

📇 Contact Details:
📧 Email: ${socialmedialink.email}
📞 Call me: ${selectedNumber}

I'm excited to connect with you! 🎉
    `.trim();

   

    // Share both files
    if (navigator.canShare && navigator.canShare({ files: [resumeFile] })) {
      await navigator.share({
        title: 'My Portfolio & Resume',
        text:fullMessage,
        files: [resumeFile],
      });
    } else {
      alert('Your browser does not support sharing files.');
    }
  } catch (err: any) {
    console.error('Sharing failed:', err.message);
    alert('Failed to share the resume and message.');
  }
};



  return (
    <div className="relative group inline-block">
      <button
        onClick={handleShare}
        className="text-blue-600 border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition duration-200"
      >
        <MdShare size={20} />
      </button>
    </div>
  );
};

export default ShareButton;

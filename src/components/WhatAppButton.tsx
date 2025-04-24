import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div>
      <a
      href="https://wa.me/56954665435"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-transparent hover:bg-green-100 text-green-500 rounded-full p-4 z-50 flex items-center justify-center "
      style={{ width: "60px", height: "60px", color: "#25D366" }}
    >
      <FaWhatsapp size={35} />
    </a>
      
    </div>
  );
};

export default WhatsAppButton;
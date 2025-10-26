import { useReactToPrint } from 'react-to-print';
import { Printer } from 'lucide-react';
import { useRef } from 'react';

const PrintButton = ({ targetRef, fileName = 'team-resume' }) => {
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: fileName,
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `
  });

  return (
    <button
      onClick={handlePrint}
      className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 no-print z-50 transition-all hover:scale-105"
    >
      <Printer size={20} />
      <span>Print / Save PDF</span>
    </button>
  );
};

export default PrintButton;

import { useState } from 'react';

interface ModalProps {
  modalId: string;
  buttonText: string;
  children: React.ReactNode;
}

// Reusable Modal component
function Modal({ modalId, buttonText, children }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
        {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with Rahma!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
    </div>
  );
}

export default Modal ;
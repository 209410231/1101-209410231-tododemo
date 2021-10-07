import { useState } from 'react';
import Modal_31 from './Modal_31';
import Backdrop_31 from './Backdrop_31';

function Todo_31(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Backdrop_31 onClose={closeModalHandler} />}
      {showModal && (
        <Modal_31 text="Are you sure?" onClose={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo_31;

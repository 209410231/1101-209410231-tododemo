import { useState } from 'react';
import Modal_31 from './Modal_31';
import Backdrop_31 from './Backdrop_31';

function Todo_31(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
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
      {showModal && <Backdrop_31 />}
      {showModal && <Modal_31 />}
    </div>
  );
}

export default Todo_31;

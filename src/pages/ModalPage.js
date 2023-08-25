import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const actions = (
    <>
      <Button onClick={handleClose} primary>
        Amazing
      </Button>
      <Button onClick={handleClose} secondary outline>
        Great!
      </Button>
    </>
  );
  const modal = (
    <Modal onClose={handleClose} actions={actions}>
      <p>
        The vast expanse of the sea stretches out before you, its deep blue
        waters captivating and mysterious. Waves crash against the shore,
        creating a soothing rhythm that resonates with the soul.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {show && modal}
    </div>
  );
}

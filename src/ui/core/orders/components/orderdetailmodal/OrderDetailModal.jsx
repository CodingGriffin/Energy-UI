import { Modal, Table, Button, TextInput } from "common/components";
import { OrderDetailTable } from "../orderdetailtable/OrderDetailTable";

export const OrderDetailModal = ({ show, setShow, data = null }) => {
  return (
    <Modal title="Order Details" doModal={show} onClose={setShow}>
      <OrderDetailTable data={data} editable={true}/>
    </Modal>
  );
};

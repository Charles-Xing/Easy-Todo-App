'use client';
import React, { FormEventHandler,useState, } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { addTodo } from "@/public/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  //Managing the state of the Modal component using useState
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');
  //auto refresh
  
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
       <button onClick={() => setModalOpen(true)} className="w-full btn btn-secondary ">
        ADD New TASK 
        <AiOutlinePlus size={20} className="ml-2"/>
       </button>
       <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="text-lg font-bold">Add new task</h3>
          <div className="modal-action">
            <input type="text" placeholder="Type here" value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} className="w-full input input-bordered" />
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
       </Modal>
    </div>
  )
}

export default AddTask

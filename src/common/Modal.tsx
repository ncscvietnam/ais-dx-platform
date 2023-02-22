import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
type ModalProps = {
  titleModal?: string;
  className?: string;
  handleClose?: (_event: any) => void;
  handleOpen?: (_event: any) => void;
  valueModal?: React.ReactNode;
  isShow?: boolean;
};
const Modal: React.FC<ModalProps> = ({
  isShow,
  // handleOpen,
  handleClose,
  titleModal,
  valueModal,
}) => {
  return (
    <>
      <Transition appear show={isShow} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="mx-auto flex min-h-full w-[90%] items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                  <div className="absolute right-3 top-3">
                    <button className="ml-auto" onClick={handleClose}>
                      <XCircleIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary  "
                  >
                    {titleModal}
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-primary  ">{valueModal}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;

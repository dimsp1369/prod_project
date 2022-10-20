import { Modal } from 'shared/ui/Modal';
import { LoginFormLazy } from '../ModalForm/LoginForm.lazy';

interface ModalAuthProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void
}

export const ModalAuth = (props: ModalAuthProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginFormLazy />
        </Modal>
    );
};

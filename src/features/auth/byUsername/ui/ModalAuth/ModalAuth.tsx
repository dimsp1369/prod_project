import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../ModalForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};

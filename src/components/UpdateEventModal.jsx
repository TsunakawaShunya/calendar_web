import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Text,
} from "@chakra-ui/react";
  
export const UpdateEventModal = ({
    isOpen,
    onClose,
    updateEvent,
    updateTitle,
    updateEventId,
    updateDescription,
    updateStartDate,
    updateEndDate,
    setTitle,
    setDescription,
    setStartDate,
    setEndDate,
  }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>イベントを更新</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text fontWeight="bold">タイトル</Text>
                <Input
                placeholder="タイトル"
                value={updateTitle}
                onChange={(e) => setTitle(e.target.value)}
                mb="16px"
                />
                <Text fontWeight="bold">詳細</Text>
                <Input
                placeholder="詳細"
                value={updateDescription}
                onChange={(e) => setDescription(e.target.value)}
                mb="16px"
                />
                <Text fontWeight="bold">予定開始日付</Text>
                <Input
                value={updateStartDate}
                type="date"
                mb="16px"
                onChange={(e) => setStartDate(e.target.value)}
                />
                <Text fontWeight="bold">予定終了日付</Text>
                <Input
                value={updateEndDate}
                type="date"
                mb="16px"
                onChange={(e) => setEndDate(e.target.value)}
                />
            </ModalBody>
    
            <ModalFooter>
                <Button
                colorScheme="blue"
                onClick={() => {
                    updateEvent({
                    updateEventId,
                    updateTitle,
                    updateDescription,
                    updateStartDate,
                    updateEndDate,
                    });
                    onClose();
                }}
                >
                イベントを更新
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
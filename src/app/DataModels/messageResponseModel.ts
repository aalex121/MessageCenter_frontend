export interface MessageResponseModel {
    recipientId: number;
    senderName: string;
    id: number;
    senderId: number;
    typeId: number;
    createDateAndTime: Date;
    text: string;
}
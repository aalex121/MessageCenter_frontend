export interface NewMessageModel {
    id: number;
    senderId: number;
    typeId: number;
    createDateAndTime: Date;
    text: string;
    recipientId: number;
    recipientType: number;
    isDraft: boolean;
}
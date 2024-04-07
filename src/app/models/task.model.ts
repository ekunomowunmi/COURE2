export class Task {
    id?: number;
    title!: string;
    description!: string;
    dueDate?: Date;
    priority!: 'LOW' | 'HIGH' | 'NEUTRAL';
    status!: 'pending' | 'inprogress' | 'completed'
}
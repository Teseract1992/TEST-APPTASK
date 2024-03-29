import { Title } from '@angular/platform-browser';

export interface Task {
    id?: number,
    title?: string,
    description?: string,
    image?: string,
    created_at?: Date
};
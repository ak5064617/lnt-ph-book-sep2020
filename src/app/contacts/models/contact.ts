import { Injectable } from '@angular/core';
export interface Icontact{
    id: number;
    name: string;
    email: string;
    phone: string;
}



export class Contact implements Icontact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

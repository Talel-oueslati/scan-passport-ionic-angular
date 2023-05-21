import { Client } from "./client";

export class Reservation {
  reservation_id: number;
  reservationCode: string;
  check_in_date: Date;
  check_out_date: Date;
  client_id: number;
  email:string;
}


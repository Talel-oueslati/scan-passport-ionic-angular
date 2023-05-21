import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  constructor(private sqlite: SQLite) { }

  private dbName = 'system';

  public async createDatabase(): Promise<void> {
    try {
      const db = await this.sqlite.create({
        name: this.dbName,
        location: 'default'
      });

      console.log('db:', db); // add this line to check if db object is defined

      await db.executeSql(`
        CREATE TABLE reservation (
          reservation_id number(20) GENERATED ALWAYS AS IDENTITY NOT NULL,
          reservationcode VARCHAR(20),
          check_in_date VARCHAR(20),
          check_out_date VARCHAR(20),
          client_id number(20),
          FOREIGN KEY (client_id) REFERENCES client (id)
        )
      `, []);

      await db.executeSql(`
        CREATE TABLE client (
          id number(20) GENERATED ALWAYS AS IDENTITY NOT NULL,
          firstName VARCHAR(50),
          lastName VARCHAR(50),
          passportType VARCHAR(50),
          nationality VARCHAR(50),
          gender VARCHAR(10),
          birthDate VARCHAR(20),
          passportNumber VARCHAR(20),
          personalNumber VARCHAR(20),
          image BLOB,
          PRIMARY KEY (id)
        )
      `, []);

      console.log('Database created');
    } catch (error) {
      console.log('Error creating database', error);
    }
  }

  public async saveReservation(reservation: any): Promise<void> {
    const db = await this.sqlite.create({
      name: this.dbName,
      location: 'default'
    });

    await db.executeSql(`
    INSERT INTO reservation (reservation_id,reservationcode,check_in_date,check_out_date,client_id) VALUES (1,'aaa','2022-05-01','2022-05-05',4)
    `, []);
    await db.executeSql(`
    INSERT INTO table_name (firstName, lastName, passportType, nationality, gender, birthDate, passportNumber, personalNumber, image)
      VALUES ('John', 'Doe', 'Type A', 'USA', 'Male', '1990-01-01', '123456', '789012', 'image data as base64 string');

    `, []);
  }

  public async getReservations(): Promise<any[]> {
    const db = await this.sqlite.create({
      name: this.dbName,
      location: 'default'
    });

    const results = await db.executeSql(`
      SELECT * FROM reservation
    `, []);

    const reservations = [];

    for (let i = 0; i < results.rows.length; i++) {
      const row = results.rows.item(i);
      reservations.push(row);
    }

    return reservations;
  }
}

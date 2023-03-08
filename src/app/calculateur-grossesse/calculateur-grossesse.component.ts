import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-calculateur-grossesse',
  templateUrl: './calculateur-grossesse.component.html',
  styleUrls: ['./calculateur-grossesse.component.css']
})
export class CalculateurGrossesseComponent {

lastPeriodDate!: Date;
//pregnancyDates: Date[] = [];
pregnancyDates: Array<Date> = [];
pregnancyWeeks!: number;
pregnancyDays!: number;
amenorrheaWeeks!: number;
amenorrheaDays!: number;
pregnancyMonths!: number;
progressValue!: number;


constructor() {
  this.lastPeriodDate = moment().toDate(); // Initialise lastPeriodDate à la date actuelle
  }

  calculate() {
    // Calcul du nombre de semaines de grossesse et d'aménorrhée
    const conceptionDate = moment(this.lastPeriodDate).add(2, 'weeks'); // Ajoute 2 semaines pour avoir la date de conception
    const currentDate = moment();
    const pregnancyWeeksFloat = moment.duration(currentDate.diff(conceptionDate)).asWeeks();
    console.log(pregnancyWeeksFloat)// Calcul en semaines avec décimales
    const pregnancyWeeks = Math.floor(pregnancyWeeksFloat); // Tronque pour ne garder que la partie entière
    const pregnancyDays = Math.round((pregnancyWeeksFloat - pregnancyWeeks) * 7); // Récupère le nombre de jours restants

//   const pregnancyDays = Math.round((Date.now() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
//   this.pregnancyWeeks = Math.floor(pregnancyDays / 7);
//   this.pregnancyDays = pregnancyDays % 7;
    const amenorrheaWeeksFloat = moment.duration(currentDate.diff(this.lastPeriodDate)).asWeeks();
    const amenorrheaWeeks = Math.floor(amenorrheaWeeksFloat);
    const amenorrheaDays = Math.round((amenorrheaWeeksFloat - amenorrheaWeeks) * 7);
    const pregnancyMonths = Math.floor(pregnancyDays / 30);
    this.pregnancyMonths = pregnancyMonths;

// Calcul de la progression de la grossesse en pourcentage
const progressValue = Math.round((pregnancyWeeksFloat / 39) * 100);

// Calcul des dates importantes
const nbDates = 15;
this.pregnancyDates = [];
for (let i = 0; i < nbDates; i++) {
  const date = moment(conceptionDate).add(i * 7, 'days').toDate();
  this.pregnancyDates.push(date);
}

// Mise à jour des propriétés
this.pregnancyWeeks = pregnancyWeeks;
this.pregnancyDays = pregnancyDays;
this.amenorrheaWeeks = amenorrheaWeeks;
this.amenorrheaDays = amenorrheaDays;
this.pregnancyMonths = pregnancyMonths;
this.progressValue = progressValue;


  }
  getPregnancyWeeks(date: Date): number {
    const weeksFloat = moment.duration(moment(date).diff(moment(this.lastPeriodDate))).asWeeks();
    return Math.floor(weeksFloat);
    }

    getAmenorrheaWeeks(date: Date): number {
    const weeksFloat = moment.duration(moment(date).diff(moment(this.lastPeriodDate))).asWeeks();
    return Math.floor(weeksFloat) + 2; // Ajoute 2 semaines pour avoir les semaines d'aménorrhée
    }


}

const RANKS = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]

class Warrior {
    constructor() {
        this.warriorExperience = 100;
        // this.warriorRank = 'Pushover';
        this.warriorAchievements = [];
    }

    level() {
        return Math.floor(this.warriorExperience / 100);
    }

    experience() {
        return this.warriorExperience;
    }

    rank() {
        return RANKS[Math.floor(this.warriorExperience / 1000)];

    }

    achievements() {
        return this.warriorAchievements;
    }

    training(trainArr) {
        let warriorLevel = Math.floor(this.warriorExperience / 100);
        if (trainArr[2] > warriorLevel) return 'Not strong enough';
        this.warriorAchievements.push(trainArr[0]);
        this.warriorExperience += trainArr[1];
        if (this.warriorExperience > 10000) this.warriorExperience = 10000;
        return trainArr[0];
    }

    battle(enemyLevel) {
        console.log(this.warriorExperience)
        if (enemyLevel < 1 || enemyLevel > 100) return 'Invalid level';
        let warriorLevel = Math.floor(this.warriorExperience / 100);
        let diff = enemyLevel - warriorLevel
        if (diff > 4 && Math.floor(enemyLevel / 10) !== Math.floor(warriorLevel / 10)) return 'You\'ve been defeated';
        else if (diff > 0) {
            this.warriorExperience += 20 * diff * diff;
            if (this.warriorExperience > 10000) this.warriorExperience = 10000;
            return 'An intense fight'
        } else if (diff > -2) {
            this.warriorExperience += diff ? 5 : 10;
            if (this.warriorExperience > 10000) this.warriorExperience = 10000;
            return 'A good fight'
        } else {
            return 'Easy fight'
        }
    }
}
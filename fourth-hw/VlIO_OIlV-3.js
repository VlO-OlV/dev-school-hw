class Warrior {
  
    ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    
    constructor() {
      this.currentLevel = 1;
      this.currentRank = "Pushover";
      this.currentAchievements = [];
      this.currentExperience = 100;
    }
    
    level() {
      return this.currentLevel;
    }
    
    rank() {
      return this.currentRank;
    }
    
    achievements() {
      return this.currentAchievements;
    }
    
    experience() {
      return this.currentExperience;
    }
    
    updateStats() {
      this.currentExperience = (this.currentExperience > 10000) ? 10000 : this.currentExperience;
      this.currentLevel = (Math.floor(this.currentExperience/100) > 100) ? 100 : Math.floor(this.currentExperience/100);
      this.currentRank = this.ranks[Math.floor(this.currentLevel/10)];
    }
    
    training(trainingDescription) {
      let message;
      if(this.currentLevel >= trainingDescription[2]) {
        this.currentAchievements.push(trainingDescription[0]);
        this.currentExperience += trainingDescription[1];
        message = trainingDescription[0];
      } else {
        message = "Not strong enough";
      }
      this.updateStats();
      return message;
    }
    
    battle(enemyLevel) {
      let message;
      if(enemyLevel > 100 || enemyLevel < 1) {
        message = "Invalid level";
      } else if(enemyLevel - this.currentLevel >= 5 && Math.floor(this.currentLevel / 10) < Math.floor(enemyLevel / 10)) {
        message = "You've been defeated";
      } else if(this.currentLevel - enemyLevel >= 2) {
        message = "Easy fight";
      } else if(this.currentLevel - enemyLevel == 1) {
        this.currentExperience += 5;
        message = "A good fight";
      } else if(this.currentLevel == enemyLevel) {
        this.currentExperience += 10;
        message = "A good fight";
      } else if(this.currentLevel < enemyLevel) {
        this.currentExperience += 20 * Math.pow(enemyLevel-this.currentLevel,2);
        message = "An intense fight";
      }
      this.updateStats();
      return message;
    }
}
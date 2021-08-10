function wakeDog(dogName, dogBreed) {
    const wakeDog = `Wake ${dogName} the ${dogBreed}`;
    console.log(wakeDog)
    return wakeDog
}

function leashDog(dogName, dogBreed) {
    const leashDog = `Leash ${dogName} the ${dogBreed}`;
    console.log(leashDog)
    return leashDog
}

function walkToPark(dogName, dogBreed) {
    const walkToPark = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walkToPark)
    return walkToPark
}

function throwFrisbee(dogName, dogBreed) {
    const throwFrisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwFrisbee)
    return throwFrisbee
}

function walkHome(dogName, dogBreed) {
    const walkHome = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkHome)
    return walkHome
}

function unleashDog(dogName, dogBreed) {
    const unleashDog = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleashDog)
    return unleashDog
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const exercises = []

    for (let i = 0; i < routine.length; i++) {
      const fn = routine[i]
      const exercise = fn(dogName, dogBreed)
      exercises.push(exercise)
    }
    
    return exercises
  }
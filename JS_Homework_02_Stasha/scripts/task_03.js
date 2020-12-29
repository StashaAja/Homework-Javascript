
//Prashanje br 3: Samo za potvrda vnesot na promenliva preku Prompt treba da go stavam posle Funkcijata? Prvoto shto treba da e vo ovj .js fajl e funkcijata?

var yearOfBirth = prompt("Enter the year you were born:");

yearOfBirthNumber = parseFloat(yearOfBirth);

console.log(yearOfBirthNumber);
console.log(typeof(yearOfBirthNumber));



//Prashanje br 4: Vnatre vo funkcijata ako stavam let sakam da imenuvam povtorno promenliva Formula nadvor od scope-ot na funkcijata, dali e toa poentata?

function ChineseZodiacCalculation(yearOfBirthNumber){
    let formula = (yearOfBirthNumber - 4) % 12;
    return formula;
}

// Rezultat ZodiacSign = Povikuvanje na funkcija (Vnes na promenliva)

var ZodiacSign = ChineseZodiacCalculation(yearOfBirthNumber);

console.log("The number you need for the Zodiac Sign is:" + ZodiacSign)
console.log(typeof(ZodiacSign))

var Rat = 0;
var Ox = 1;
var Tiger = 2;
var Rabbit = 3;
var Dragon = 4;
var Snake = 5;
var Horse = 6;
var Goat = 7;
var Monkey = 8;
var Rooster = 9;
var Dog = 10;
var Pig = 11;


if(ZodiacSign==Rat){
    alert("In Chinese Zodiac you are a Rat")
    alert("Those born under the Chinese Zodiac sign of the Rat are quick-witted, clever, charming, sharp and funny. They have excellent taste, are a good friend and are generous and loyal to others considered part of its pack. Motivated by money, can be greedy, is ever curious, seeks knowledge and welcomes challenges. Compatible with Dragon or Monkey.")
}


else if(ZodiacSign==Ox){
    alert("In Chinese Zodiac you are an Ox")
    alert("Another of the powerful Chinese Zodiac signs, the Ox is steadfast, solid, a goal-oriented leader, detail-oriented, hard-working, stubborn, serious and introverted but can feel lonely and insecure. Takes comfort in friends and family and is a reliable, protective and strong companion. Compatible with Snake or Rooster.")
}

else if(ZodiacSign==Tiger){
    alert("In Chinese Zodiac you are a Tiger")
    alert("Those born under the Chinese Zodiac sign of the Tiger are authoritative, self-possessed, have strong leadership qualities, are charming, ambitious, courageous, warm-hearted, highly seductive, moody, intense, and they’re ready to pounce at any time. Compatible with Horse or Dog.")
}

else if(ZodiacSign==Rabbit){
    alert("In Chinese Zodiac you are a Rabbit")
    alert("Those born under the Chinese Zodiac sign of the Rabbit enjoy being surrounded by family and friends. They’re popular, compassionate, sincere, and they like to avoid conflict and are sometimes seen as pushovers. Rabbits enjoy home and entertaining at home. Compatible with Goat or Pig.")
}

else if(ZodiacSign==Dragon){
    alert("In Chinese Zodiac you are a Dragon")
    alert("A powerful sign, those born under the Chinese Zodiac sign of the Dragon are energetic and warm-hearted, charismatic, lucky at love and egotistic. They’re natural born leaders, good at giving orders and doing what’s necessary to remain on top. Compatible with Monkey and Rat.")
}

else if(ZodiacSign==Snake){
    alert("In Chinese Zodiac you are a Snake")
    alert("Those born under the Chinese Zodiac sign of the Snake are seductive, gregarious, introverted, generous, charming, good with money, analytical, insecure, jealous, slightly dangerous, smart, they rely on gut feelings, are hard-working and intelligent. Compatible with Rooster or Ox.")
}

else if(ZodiacSign==Horse){
    alert("In Chinese Zodiac you are a Horse")
    alert("Those born under the Chinese Zodiac sign of the Horse love to roam free. They’re energetic, self-reliant, money-wise, and they enjoy traveling, love and intimacy. They’re great at seducing, sharp-witted, impatient and sometimes seen as a drifter. Compatible with Dog or Tiger.")
}

else if(ZodiacSign==Goat){
    alert("In Chinese Zodiac you are a Goat")
    alert("Those born under the Chinese Zodiac sign of the Goat enjoy being alone in their thoughts. They’re creative, thinkers, wanderers, unorganized, high-strung and insecure, and can be anxiety-ridden. They need lots of love, support and reassurance. Appearance is important too. Compatible with Pig or Rabbit.")
}

else if(ZodiacSign==Monkey){
    alert("In Chinese Zodiac you are a Monkey")
    alert("Those born under the Chinese Zodiac sign of the Monkey thrive on having fun. They’re energetic, upbeat, and good at listening but lack self-control. They like being active and stimulated and enjoy pleasing self before pleasing others. They’re heart-breakers, not good at long-term relationships, morals are weak. Compatible with Rat or Dragon.")
}

else if(ZodiacSign==Rooster){
    alert("In Chinese Zodiac you are a Rooster")
    alert("Those born under the Chinese Zodiac sign of the Rooster are practical, resourceful, observant, analytical, straightforward, trusting, honest, perfectionists, neat and conservative. Compatible with Ox or Snake.")
}

else if(ZodiacSign==Dog){
    alert("In Chinese Zodiac you are a Dog")
    alert("Those born under the Chinese Zodiac sign of the Dog are loyal, faithful, honest, distrustful, often guilty of telling white lies, temperamental, prone to mood swings, dogmatic, and sensitive. Dogs excel in business but have trouble finding mates. Compatible with Tiger or Horse.")
}

else if(ZodiacSign==Pig){
    alert("In Chinese Zodiac you are a Pig")
    alert("Those born under the Chinese Zodiac sign of the Pig are extremely nice, good-mannered and tasteful. They’re perfectionists who enjoy finer things but are not perceived as snobs. They enjoy helping others and are good companions until someone close crosses them, then look out! They’re intelligent, always seeking more knowledge, and exclusive. Compatible with Rabbit or Goat.")
}

else{
    console.log("Please re-enter a valid year of Birth.")
}

//Prashanje br 5: Sakav da vgnezdam funkcija vo if na pochetokot ama mi pukashe. Dali e ova vozmozno? Go ostaviv dole zakomentiran obidot :)

// if(ChineseZodiacCalculation(yearOfBirthNumber)=0){
//     console.log("In Chinese Zodiac you are a Rat")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=1){
//     console.log("In Chinese Zodiac you are an Ox")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=2){
//     console.log("In Chinese Zodiac you are a Tiger")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=3){
//     console.log("In Chinese Zodiac you are a Rabbit")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=4){
//     console.log("In Chinese Zodiac you are a Dragon")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=5){
//     console.log("In Chinese Zodiac you are a Snake")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=6){
//     console.log("In Chinese Zodiac you are a Horse")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=7){
//     console.log("In Chinese Zodiac you are a Goat")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=8){
//     console.log("In Chinese Zodiac you are a Monkey")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)=9){
//     console.log("In Chinese Zodiac you are a Rooster")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)10){
//     console.log("In Chinese Zodiac you are a Dog")
// }

// else if(ChineseZodiacCalculation(yearOfBirthNumber)11){
//     console.log("In Chinese Zodiac you are a Pig")
// }

// else{
//     console.log("Please re-enter a valid year of Birth.")
// }


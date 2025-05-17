
class Deck {                    //make a class for decks
    constructor(deckName, deckData) {
        //deckName identifies a particulardeck
        this.deckName = deckName;
        //give the deck a div Id or name that connects to the deckWidget div
        //make a deckWidget  div
        const node = document.createElement("div");
        //add deckWidget as className of the div we made
        node.className = "deckWidget";
        node.id = deckName;
        // initiate counter: lockStatus,  and set to 0
        node.lockStatus = 0;
        //add div to the widgetContainer
        const deckWidgetInstance = document.getElementById("widgetContainer").appendChild(node);


        //deckData is an array of items in the deck
        //for each member of the array deckData, 
        // assign it's value to the spot in the array in the newly constructed instance
        //also make the text to put in the dropdown menu select element
        let deckSize = deckData.length;
        let deckContentsText = "";
        this.deckData = new Array();
        let optionClass = deckName +"Option";
        for(let i=0; i<deckSize; i++) {
            this.deckData[i] = deckData[i];
            deckContentsText += `<option class =${optionClass}>${this.deckData[i]}</option>`;

        }
        




        //make and initialize contents of widgetContainer
        //this is what the HTML for a generic deskWidget looks like:
        // <table>
        //    <td>
        //        <form id="deckForm" action="/deckFormResultsURLPage.php">  <! This is a dropdown menu that presents the deckData
        //            <label for="deckOptions" style="font-weight: bolder; font-size: x-large  ;">Sample from HTML deckWidgetTitle</label>
        //            <select class="deckOptions" name="deckOptions" id="deckOptions" form="deckForm"> 
        //                <option>option1</option>
        //                <option>option2</option>
        //                <option>option3</option>
        //            </select>
        //        </form>
        //    </td>
         //   
       //     <td>                                       <!this is a lockButton associated with this deckWidget
       //         <div onload="setupLockButton(this.getElementById("deckWidget"))" class="lockButton" id="lockButton" >   
       //             LockButton
       //         </div>
       //
       //     </td>
       // </table>

       //this adds the table with the form and lockButton
       //the lockButton div has an id = deckName+"LockButton"
       // the Form is named deckName+"FormName"
       //the form results go to "/"+ deckName +"DeckFormResultsURLPage.php"
       const lockButtonIDName = deckName+"LockButton";
       const deckFormName = deckName+"FormName";
       const labelText = deckName+": ";
       const formActionResults = "/"+ deckName +"DeckFormResultsURLPage.php";
       const deckOptionsSpecific = deckName + "DeckOptions";

        const widgetContents = `<table id=${deckName+"Table"}>
                                  <td id="formColumn">
                                        <form id = ${deckFormName} action= ${formActionResults}>
                                            <label for=${deckOptionsSpecific} 
                                                    style="font-weight: bolder; font-size: x-large;">
                                                        ${labelText}
                                            </label>
                                            <select class= ${deckOptionsSpecific} 
                                                    name= ${deckOptionsSpecific} 
                                                    id= ${deckOptionsSpecific} 
                                                    form= ${deckFormName}
                                                    style = "font-size: xx-large;
                                                    color: rgb(116, 15, 1);
                                                    background-color: rgb(133, 236, 223);"> 
                                                                ${deckContentsText}
                                            </select>
                                        </form>
                                  </td>
                                  <td id="buttonColumn">
                                    <div class="lockButton" id="${lockButtonIDName}">
                                        Lock Text
                                    </div>
                                  </td>
                                </table>`;

                                        
                                



                                
                                
       node.innerHTML= widgetContents;



       //to setup a lockbutton for a particular deckWidget
       const lockButtonElement = document.getElementById(lockButtonIDName);
    
       // lockButton starts green and with text "unlocked", 
       lockButtonElement.textContent = "Unlocked";
       lockButtonElement.style.backgroundColor = 'rgb(18, 247, 106)';
       
      

    //other button formatting that will stay constant
    lockButtonElement.style.border = '2px solid rgb(116, 15, 1)'; 
    lockButtonElement.style.margin = '3px'; 
    lockButtonElement.style.padding = '2px';
    lockButtonElement.style.textAlign = 'center';
    lockButtonElement.style.color = 'rgb(116, 15, 1)';


    //add the eventListener that looks/waits for a mouse click on your button div, the deckWidget's particular lockButton
    lockButtonElement.addEventListener(`click`, function() {lockClickFunction(deckName);} );


        //lockStatus is a counter variable
        //lockStatus should be 0 if unlocked and 1 if locked
        //initiate lockStatus to 0
        this.lockStatus = 0;

    }
}





function setup() {    //to set up the Randomize Button
    randomButton = document.getElementById('button'); 
    //Randomize button starts Peach and has big Brown Text
    randomButton.style.backgroundColor = 'rgb(247, 201, 175)';
    randomButton.textContent = "Randomize!";
    randomButton.style.border = '2px solid rgb(116, 15, 1)'; 
    randomButton.style.margin = '3px'; 
    randomButton.style.padding = '2px';
    randomButton.style.textAlign = 'center';
    randomButton.style.color = 'rgb(116, 15, 1)';
    
    //add the even listener that waits for the mouse click
   document.getElementById('button').addEventListener(`click`, clickRandomButton);

   //
   //Hard code Decks here:
   //DECK TEMPLATE:
 
/*
  //Deck X: Name 
     const deckDataX = [   //data array
       "o", 
       "o", 
       "o", 
    
    ]
    //create the Deck Name 
      const DeckX = new Deck("Name", deckDataX)
  //End Deck X//

*/


   //Deck 0: Key 
   const deckData0 = [   //data array
    "A", 
    "A#/Bb", 
    "B", 
    "C", 
    "C#/Db", 
    "D", 
    "D#/Eb", 
    "E", 
    "F", 
    "F#/Gb",
    "G",
    "G#/Ab"
]
//create the Deck Key 
   const Deck0 = new Deck("Key", deckData0)
   //End Deck 0


  
   //Deck 1: Tempo 
   const deckData1 = [   //data array
    "55 bpm", 
    "60 bpm", 
    "65 bpm", 
    "70 bpm", 
    "75 bpm", 
    "80 bpm", 
    "85 bpm", 
    "90 bpm", 
    "95 bpm", 
    "100 bpm",
    "105 bpm",
    "110 bpm",
    "115 bpm",
    "120 bpm",
    "125 bpm",
    "130 bpm",
    "135 bpm",
    "140 bpm",
    "145 bpm"
]
//create the Deck Tempo 
   const Deck1 = new Deck("Tempo", deckData1)
   //End Deck 1



//Deck 2: SBLDrums 
     const deckData2 = [   //data array
       "Sloppy Joe- Killing Me Softly, Nate Wood,Rock, 4/4, 85 BPM", 
       "Syncopate - Young Man, Nate Wood, Rock, 4/4, 85 BPM", 
       "Sting Like A Bee, Nate WoodRock, 4/4, 102 BPM",
       "Inverted Paradise, Nate Wood, Rock, 4/4, 102 BPM",
       "Momentum Police, Nate Wood, Rock, 4/4, 132 BPM",
       "Ride Or Die, Nate Wood, Rock, 4/4, 132 BPM",
       "Kneebody Problem, Nate Wood, Rock, 4/4, 132 BPM",
       "Ride Or Live, Nate Wood, Rock, 4/4, 132 BPM",
       "Swanky Thang, Darren Stanley, Funk, 4/4, 80 BPM",
       "Solid Wood Floor, Darren Stanley, Rock, 4/4, 60 BPM",
       "Move It, Darren Stanley, Funk, 4/4, 80 BPM",
       "Itchy And Scratchy, Darren Stanley, Rock, 4/4, 99 BPM",
       "Brakes On Full, Gergo Borlai, Funk, 4/4, 75 BPM",
       "Thirteenth Birthday, Gergo Borlai, Rock, 4/4, 90 BPM",
       "For Better, Gergo Borlai, Rock, 4/4, 100 BPM",
       "Crazy Like Them, Gergo Borlai, Rock, 4/4, 119 BPM",
       "Jumping Funky, Gergo Borlai, Funk, 4/4, 125 BPM",
       "Looms Large, Mark Guiliana, Rock, 4/4, 80 BPM",
       "Heavy In April, Mark Guiliana, Rock, 4/4, 100 BPM",
       "Skip To The End, Mark Guiliana, Jazz, 4/4, 100 BPM",
       "Moments Replay, Mark Guiliana, Rock ,4/4, 120 BPM",
       "Does It Really, Mark Guiliana, Funk, 4/4, 120 BPM",
       "Head Held Low, Mark Raudabaugh, Rock, 4/4, 60 BPM",
       "Hot Husky Day, Mark Raudabaugh, Funk, 4/4, 80 BPM",
       "Driving Daily, Mark Raudabaugh, Rock, 4/4, 99 BPM",
       "Eagle Eyed Owl, Tyler Greenwell, Rock, 4/4, 60 BPM",
       "Soldier Attitude, Tyler Greenwell, Rock, 4/4, 80 BPM",
       "Sizzle Simple, Tyler Greenwell, Jazz, 4/4, 99 BPM",
       "Clean Jacket Day, Tyler Greenwell, Rock, 4/4, 119 BPM",
       "I Can't Dance, Tyler Greenwell, World, 4/4, 119 BPM",
       "Slow Funk, Darren Stanley, Funk, 4/4, 60 BPM",
       "Slow Funk 2, Darren Stanley, Funk, 4/4, 80 BPM",
       "Slow Metal Groove, Mark Raudabaugh, Metal, 4/4, 60 BPM",
       "Slow Metal 16th Hi-Hat, Mark Raudabaugh, Metal, 4/4, 60 BPM",
       "Baiao- Basic Pattern, Rafael Pereira, Latin, 4/4, 99 BPM",
       "Salsa Cuba- Basic Pattern, Rafael Pereira, Latin, 4/4, 89 BPM",
       "Comparsa- Basic Pattern, Rafael Pereira, Latin, 4/4, 60 BPM",
       "Samba- Basic Pattern, Rafael Pereira, Latin, 4/4, 90 BPM",
       "Rock 1 - Basic Pattern- 8th Hi-Hat, Rock, 4/4, 120 BPM",
       "Rock 2 - Basic Pattern, 8th Cymbal, Rock, 4/4, 120 BPM",
       "Rock 3 - 8th Hi-Hat, Rock, 4/4, 130 BPM",
       "Rock 4 - Upbeat Kicks, Rock, 4/4, 130 BPM",
       "Rock 5 - 8th Cymbals, Rock, 4/4, 130 BPM",
       "Rock 6 - Rock Ballad, Rock, 4/4 70 BPM",
       "Rock 7 - 8th Hi-HatRock, 6/8, 140 BPM",
       "Rock 8 - Money, Rock, 7/8, 124 BPM",
       "Rock 9 - Animals, Rock, 5/4, 170 BPM",
       "Funk 1 - Give Up The Funk, Funk, 4/4, 106 BPM",
       "Funk 2 - Opened Hi-Hat, Funk, 4/4, 102 BPM",
       "Funk 3 - 16th Closed Hi-Hat, Funk, 4/4, 102 BPM",
       "Funk 4 - Only 16th Hi-Hat, Funk, 4/4, 120 BPM",
       "Funk 5 - 16th Hi-Hat, Funk, 4/4, 120 BPM",
       "Funk 6 - Slow Funk 16th Hi-Hat, Funk, 4/4, 80 BPM",
       "Funk 7 - Slow Funk 16th Cymbal, Funk, 4/4, 80 BPM",
       "Funk 8 - Superstition- Shuffle 16th, Funk, 4/4, 100 BPM",
       "Funk 9 - Bernard Purdie Shuffle, Funk, 4/4, 120 BPM",
       "Jazz 1 - Basic Pattern- Brushes, Jazz, 4/4, 120 BPM",
       "Jazz 2 - Basic Pattern- 8th Cymbal, Jazz, 4/4, 120 BPM",
       "Jazz 3 - 2 & 4 Hi-Hat, Sticks, Jazz ,4/4, 120 BPM",
       "Jazz 4 - Waltz Jazz- Brushes, Jazz, 3/4, 132 BPM",
       "Jazz 5 - Waltz Jazz- Cymbal, Jazz, 3/4, 132 BPM",
       "Jazz 6 - Bebop- Brushes, Jazz, 4/4, 130 BPM",
       "Jazz 7 - Slow Swing, Jazz, 4/4, 100 BPM",
       "Jazz 8 - Take 5Jazz, 5/4, 174 BPM",
       "World 1 - Son Clave- Cascara- Conga, World, 4/4, 160 BPM",
       "World 2 - Rumba Clave- Guiro- Conga, World, 4/4, 160 BPM",
       "World 3 - Afro-Cuban 6/8, World, 6/8, 165 BPM",
       "World 4 - Bossa Nova, World, 4/4, 120 BPM",
       "World 5 - Samba, World, 4/4, 120 BPM",
       "World 6 - Partido Alto, World, 4/4, 110 BPM",
       "World 7 - Calypso, World, 4/4, 110 BPM",
       "Disco 1 - Basic Pattern- 16th Hi-Hat, 4/4, 120 BPM",
       "Disco 2 - Basic Pattern- Opened-Closed Hi-Hat, 4/4, 120 BPM",
       "Disco 3 - Medium Disco- 8th Opened-Closed Hi-Hat, 4/4, 110 BPM",
       "Disco 4 - Medium Disco- 8th Cymbal, 4/4, 110 BPM",
       "Disco 5 - Upbeat Disco, 4/4, 130 BPM",
       "Disco 6 - Upbeat Disco- Opened-Closed Hi-Hat, 4/4, 130 BPM",
       "Blues 1 - Basic Pattern- 8th Hi-Hat ,Blues, 4/4, 90 BPM",
       "Blues 2 - Basic Pattern- 8th Cymbal, Blues, 4/4, 90 BPM",
       "Blues 3 - Slow Blues- Crosstick, Blues, 12/8, 140 BPM",
       "Blues 4 - Straight Blues- Closed Hi-Hat, Blues, 4/4, 130 BPM",
       "Blues 5 - Straight Blues- Cymbal, Blues, 4/4 ,130 BPM",
       "Blues 6 - Rock Blues- Shuffle Hi-Hat, Blues, 4/4, 120 BPM",
       "Blues 7 - Rock Blues- Shuffle Cymbal, Blues, 4/4, 120 BPM",
       "Pop 1 - Basic Pattern- 8th Hi-Hat, Pop, 4/4, 120 BPM",
       "Pop 2 - 8th Hi-Hat, Pop, 4/4, 120 BPM",
       "Pop 3 - Half Time, Pop, 4/4, 80 BPM",
       "Pop 4 - Quarter Cymbal, Pop, 4/4, 130 BPM",
       "Accelerator 1 - Simple Drum Pattern, Rock, 4/4, 80 BPM",
       "Accelerator 2 - Simple Drum Pattern, Rock, 4/4, 80 BPM",
       "Accelerator 3 - Simple Drum Pattern, Rock, 4/4, 80 BPM",

    ]
    //create the Deck SBLDrums 
      const Deck2 = new Deck("SBLDrums", deckData2)
  //End Deck 2//





  //Deck 3: Technique 
     const deckData3 = [   //data array
       "Fretting Hand Muting", 
       "Finger Style", 
       "Palm Muting",
       "Plucking Hand Muting",
       "Alternate Picking",
       "Raking",
       "Long Dynamics",
       "Short and Spikey Dynamics",
       "Mixed Muting",
       "Hammer Ons",
       "Pull Offs",
       "Slides",
       "Pick",
       "Down Picking",
       "Alternate picking",
       "Slap",
    
    ]
    //create the Deck Technique 
      const Deck3 = new Deck("Technique", deckData3)
  //End Deck 3//



   //Deck 4: ScaleOrChord 
     const deckData4 = [   //data array
       "Major - Ionian", 
       "Major Pentatonic", 
       "Major 7th",
       "Minor- Aeolian",
       "Minor Pentatonic",
       "Minor 7th",
       "Dominant-Mixolydian",
       "Dorian - flat 3,Major 6",
       "Major Blues - Major Pentatonic plus #9",
       "Minor Blues - Minor Pentatonic plus flat 5(#4)",
       "Minor 7, flat 5",
    
    ]
    //create the Deck ScaleOrChord 
      const Deck4 = new Deck("ScaleOrChord", deckData4)
  //End Deck 4//

 //Deck 5: TheoryIdea
     const deckData5 = [   //data array
       "Roots", 
       "Roots, 5ths, and octaves", 
       "Chromatic to Roots and 5ths",
       "Triadic Harmony",
       "7th Chords",
       "Triadic Harmony and chromatics",
       "7ths chords with chromatics",
       "Scale based ideas",
       "Blues Form",
       "Disco Octaves",
       "One Drop",
       "Leave Space for Fills, and fills",
       "Legato and smooth",
       "Bouncy and Short",
       "A and B sections",
       "Ascending Lines",
       "Decending Lines",
       "All on one String",
       "3 octave scales",
       "1-6m-2m-5 Chord Progression",
       "Harmonize Major Scale",
       "Harmonize Minor Scale",
       "10ths",
       "6ths",
       "Lock with Kick",
       "Lock with Snare",
       "Upbeats",
       "Downbeats",
       "Syncopation",
       "Swing",
       "Play with an effect",
       "Leave Space",
       "Mainly Quarter Notes",
       "Mainly 8th Notes",
       "Mainly 16th Notes",
       "Mainly Half Notes",
       "mainly Whole Notes",
       "Ghost Notes",
       "1-5-6m-4 Chord Progression",
       "6m-4-1-5 Chord Progression",
       "2m-5-1 Chord Progression",
       "1-6m-4-5 Chord Progresion",
       "1-3M-4-4m Chord Progression",
       "1m-6M-7M Chord Progresion",
       "1m-4m-7M Chord Progression",
       "1m-4m-5m Chord Progression",
       "1-4-5 Chord Progression",
       "1m-6M-3M-7m Chord Progression",
       "1-4-6m-5 Chord Progresion",
       "1-2m Chord Progression",
       "1-4 Chord Progression",
       "1-5 Chord Progression",
       "1-3 Chord Progression",
       "1-4-2m-5 Chord Progression",
    
    ]
    //create the Deck TheoryIdea
      const Deck5 = new Deck("TheoryIdea", deckData5)
  //End Deck 5//


   //!!!!!!!!!!!!
   //add more Decks here<<----
   //!!!!!!!!!!!!
}


function clickRandomButton() {
    // Action to perform when the div is clicked
    console.log('Div was clicked! Randomize');
    
    //GOAL: for each deck in widgetContainer pick a random number
    //and display the corresponding item in each widget

    //determine number of deckWidgets in widgetContainer, so we have a deckCount
    const widgetContainer = document.getElementsByClassName("widgetContainer");
    const deckList = document.getElementsByClassName("deckWidget");
    const deckCount = deckList.length - 1;   
    //provide a variable for the randomized answer
    //each entry in the array randomized answer represents 
    //the index of the chosen card in each Deck in the widgetContainer
    var randomizedAnswer = new Array();

    //for each deck in the widgetContainer, 
    // find it's length and pick a random number in that size limit
    //store in randomizedAnswer
    for(let i=0; i<=deckCount; i++) {
        //find length of deck i
        let deckSize = deckList[i].getElementsByTagName("option").length -1;
        //find random positive integer smaller than deckSize and store in randomizedAnswer[i]
        randomizedAnswer[i] = Math.floor(Math.random()*(deckSize +1));
        console.log(`Tried to set randomizedAnswer[${i}] to the random number ${randomizedAnswer[i]}`);
        }



    //present each answer in the form in it's widget
    for (let j=0; j<=deckCount;j++) {
        //get the name of the Deck
        let deckName = deckList[j].getAttribute("id");
        //let selectName = deckName + "DeckOptions";
        //add attribute "selected" to option tag of the 
        // chosen random result,randomizedAnswer[j], for this deck
        const optionClass = deckName +"Option";
        //the index to be presented is:
        const presentationIndex = randomizedAnswer[j];
        const deckOptions = deckList[j].getElementsByClassName(optionClass);
        
        //only update the presentation of unlocked Decks
        const myDeck= deckList[j]; //pick the Deck that goes with deckList[j]
        const deckLockStatus = myDeck.lockStatus;
        
        //clear out any previous "selected" atrributes in the option tags, from previous button presses
        for (let n=0; n<deckOptions.length; n++) {
            if (deckOptions[n].hasAttribute("selected") && deckLockStatus ==0) {
                deckOptions[n].removeAttribute("selected");
            }
            

        }

        
        if ( deckLockStatus == 0) {

        //add selected attribute to the option tag of the select based on presentationIndex
        const presentationOption = deckOptions.item(presentationIndex);
        presentationOption.setAttribute("selected", 1);
       
        console.log('Tried to set Display to the random number');
        }

    }


}




function lockClickFunction(deckWidgetName) {    // Action to perform when the lockButton div is clicked in your particular deckWidget
    const deckDiv = document.getElementById(deckWidgetName);
    const buttonDiv = deckDiv.getElementsByClassName("lockButton")[0];



    //if lockStatus is 0, then current status is unlocked, change to locked
    if (deckDiv.lockStatus == 0 ){
         //change div to red and Text to Locked
        buttonDiv.style.backgroundColor= 'rgb(247, 18, 18)';
        buttonDiv.textContent = "Locked";
         //change status of lockStatus
         deckDiv.lockStatus = 1;
         console.log('Div was Locked!' + deckDiv.id); 

    } else  {
        //if lockStatus is 1, then current status is locked, change to unlocked
        //change div to green and Text to Unlocked
        buttonDiv.style.backgroundColor= 'rgb(18, 247, 106)';
        buttonDiv.textContent = "Unlocked";
        //change status of lockStatus
        deckDiv.lockStatus = 0;
        console.log('Div was Unlocked!' + deckDiv.id);

    }  
   
   
}
/* .........................................................
                    JoJo Calculator
                Created by ANDREY ZHIGALOV 
GitHub: https://github.com/AndreyZhigalov/JoJo-Calculator
telegram: https://t.me/ZhigalovAndrey
..........................................................*/

class ArabicToRomanConverter {
    constructor(inputId, outputId) {

        this.inputNumber = document.querySelector(inputId);
        this.outputNumber = document.querySelector(outputId);

        this.roman = {0:"",1:"I",2:"II",3:"III",4:"IV",5:"V",
        6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",20:"XX",30:"XXX",
        40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC",
        100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",
        700:"DCC",800:"DCCC",900:"CM",1000:"M",2000:"MM",
        3000:"MMM",4000:"I\u0305V\u0305",5000:"V\u0305",6000:"V\u0305I\u0305",7000:"V\u0305I\u0305I\u0305",
        8000:"V\u0305I\u0305I\u0305I\u0305",9000:"I\u0305X\u0305",10000:"X\u0305",20000:"X\u0305X\u0305",
        30000:"X\u0305X\u0305X\u0305",40000:"X\u0305L\u0305",50000:"L\u0305",60000:"L\u0305X\u0305",
        70000:"L\u0305X\u0305X\u0305",80000:"L\u0305X\u0305X\u0305X\u0305",90000:"X\u0305C\u0305",100000:"C\u0305",
        200000:"C\u0305C\u0305",300000:"C\u0305C\u0305C\u0305",400000:"C\u0305D\u0305",500000:"D\u0305",
        600000:"D\u0305C\u0305",700000:"D\u0305C\u0305C\u0305",800000:"D\u0305C\u0305C\u0305C\u0305",900000:"C\u0305M\u0305",
        1000000:"M\u0305",2000000:"M\u0305M\u0305",3000000:"M\u0305M\u0305M\u0305",4000000:"I\u033FV\u033F",5000000:"V\u033F",
        6000000:"V\u033FI\u033F",7000000:"V\u033FI\u033FI\u033F",8000000:"V\u033FI\u033FI\u033FI\u033F",9000000:"I\u033FX\u033F",
        10000000:"X\u033F",20000000:"X\u033FX\u033F",30000000:"X\u033FX\u033FX\u033F",40000000:"X\u033FL\u033F",50000000:"L\u033F",
        60000000:"L\u033FX\u033F",70000000:"L\u033FX\u033FX\u033F",80000000:"L\u033FX\u033FX\u033FX\u033F",90000000:"X\u033FC\u033F",
        100000000:"C\u033F",200000000:"C\u033FC\u033F",300000000:"C\u033FC\u033FC\u033F",400000000:"C\u033FD\u033F",500000000:"D\u033F",
        600000000:"D\u033FC\u033F",700000000:"D\u033FC\u033FC\u033F",800000000:"D\u033FC\u033FC\u033FC\u033F",900000000:"C\u033F",
        1000000000:"M\u033F",2000000000:"M\u033FM\u033F",3000000000:"M\u033FM\u033FM\u033F",4000000000:"M\u033FM\u033FM\u033FM\u033F",};

        /* THE CONVERTER*/ 
        this.convertToRoman = (input) => {
            if(input.target.value <= 4999999999) {
                let arabicNumber = input.target.value.split("");
                let romanNumberOutput = "";
                for (arabicNumber; arabicNumber.length>0; arabicNumber = arabicNumber.splice(1, arabicNumber.length)){
                    if(this.roman[arabicNumber[0]+"0".repeat(arabicNumber.length-1)] != undefined) {
                        romanNumberOutput += this.roman[arabicNumber[0]+"0".repeat(arabicNumber.length-1)]
                    }
                }
                this.outputNumber.innerText = romanNumberOutput
            } else {
                this.outputNumber.innerText = "Неподходящее значение"
            }
        }
        this.start = () => {
            this.inputNumber.addEventListener("input", this.convertToRoman)
        }
    }
}



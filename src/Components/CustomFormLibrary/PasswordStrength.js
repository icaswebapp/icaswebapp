export default function calculatePasswordStrength(password) {
    let strength = {
        1: 'Very Weak',
        2: 'Weak',
        3: 'Medium',
        4: 'Strong',
        5: 'Very Strong'
      };

      let color = {
          1: "red",
          2: "orange",
          3: "blue",
          4: "green",
          5: "darkgreen"
      }

      let strengthValue = {
        'caps': false,
        'length': false,
        'special': false,
        'numbers': false,
        'small': false
      };

      if(password.length >= 6) {
        strengthValue.length = true;
      }else{
          return {strength : "INVALID" , color:"grey"}
      }

      for(let index=0; index < password.length; index++) {
        let char = password.charCodeAt(index);
        if(!strengthValue.caps && char >= 65 && char <= 90) {
            strengthValue.caps = true;
        } else if(!strengthValue.numbers && char >=48 && char <= 57){
          strengthValue.numbers = true;
        } else if(!strengthValue.small && char >=97 && char <= 122){
          strengthValue.small = true;
        } else if(!strengthValue.numbers && char >=48 && char <= 57){
          strengthValue.numbers = true;
        } else if((!strengthValue.special && (char >=33 && char <= 47)) || (char >=58 && char <= 64)) {
          strengthValue.special = true;
        }
      }

      let strengthIndicator = 0;

     for(let metric in strengthValue) {
        if(strengthValue[metric] === true) {
            strengthIndicator++;
        }
    }

    console.log("Your password: " + password + " ( " + strength[strengthIndicator] + " )" + color[strengthIndicator]);

    return {strength : strength[strengthIndicator] , color : color[strengthIndicator]};

      
      
    }
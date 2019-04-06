function missingAngle(angle1, angle2) {
      let angle = angle1 + angle2;
      let angle3 = 180 - angle;
    	if(angle3 < 90) {
        return 'acute';
      } else if(angle === 90) {
        return 'right';
      }
      else if (angle3 > 90 && angle3 < 180){
        return 'obtuse';
      }
    }
    
    console.log(missingAngle(27, 59));//obtuse
    console.log(missingAngle(135, 11));//acute
    console.log(missingAngle(45, 45));//right
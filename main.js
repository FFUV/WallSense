// Constants for motor speeds
let LEFT_MOTOR_SPEED = -60;
let RIGHT_MOTOR_SPEED = 100;
let STRAIGHT_SPEED = -102;

// Function to adjust motor speeds
function adjustMotors(leftSpeed: number, rightSpeed: number) {
    wuKong.setAllMotor(leftSpeed, rightSpeed);
}

// Function to stop motors
function stopMotors() {
    wuKong.stopAllMotor();
}

// Main loop
basic.forever(function () {
    let sonar = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1);
    
    // Adjust sensitivity to walls
    if (sonar < 25 && sonar > 5) { // Adjusted threshold for wall detection
        adjustMotors(LEFT_MOTOR_SPEED, RIGHT_MOTOR_SPEED);
        // Adjust pause duration for smoother turning
        basic.pause(100);
        // Stop after turning
        stopMotors();
        // Move straight for a short distance to better avoid obstacles
        adjustMotors(STRAIGHT_SPEED, STRAIGHT_SPEED);
        basic.pause(200);
    } else {
        adjustMotors(-102, -100);
    }
});

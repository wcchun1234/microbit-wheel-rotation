namespace ReelExtensions {
    // Block to calculate and return number of rotations
    // % block="get reel rotations with encoder value $encoderValue and counts per rotation $countsPerRotation"
    export function getReelRotations(encoderValue: number, countsPerRotation: number): number {
        return encoderValue / countsPerRotation;
    }
    
    // Block to reset the encoder
    // % block="reset reel encoder"
    export function resetReelEncoder(): void {
        Kitronik_Move_Motor.clearEncoder();
    }
    
    // Block to stop the motor
    // % block="stop reel motor"
    export function stopReelMotor(): void {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 0);
    }
}

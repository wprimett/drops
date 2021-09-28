/***************************************************************************************************/
/*
  This is an Arduino sketch for HC-SR04, HC-SRF05, DYP-ME007, BLJ-ME007Y ultrasonic ranging sensor

  Operating voltage:    5v
  Operating current:    10..20mA
  Working range:        4cm..250cm
  Measuring angle:      15°
  Operating frequency:  40kHz
  Resolution:           0.3cm
  Maximum polling rate: 20Hz

  written by : enjoyneering79
  sourse code: https://github.com/enjoyneering/


  Frameworks & Libraries:
  ATtiny Core           - https://github.com/SpenceKonde/ATTinyCore
  ESP32 Core            - https://github.com/espressif/arduino-esp32
  ESP8266 Core          - https://github.com/esp8266/Arduino
  ESP8266 I2C lib fixed - https://github.com/enjoyneering/ESP8266-I2C-Driver
  STM32 Core            - https://github.com/rogerclarkmelbourne/Arduino_STM32

  GNU GPL license, all text above must be included in any redistribution, see link below for details:
  - https://www.gnu.org/licenses/licenses.html
*/
/***************************************************************************************************/
#include <HCSR04.h>

int frame_amount = 0;
int num_frames = 15;
int delay_millis = 1000;

bool inRange = false;
int d1 = 0;

#define sample_rate 10
#define NUM_VALUES 2
#define SERIAL_LEN 8

#define trigPin 14         //trigger pin for the ultrasonic
#define echoPin 15         //echo pin

#define MAXRANGE 4000        //max range in cm, making this higher makes the results unreliable
#define MINRANGE 20          //minimal range in cm, only change this if you know your distance can't be less than this value.

float distance = 0;

/*
HCSR04(trigger, echo, temperature, distance)

trigger     - trigger pin
echo        - echo pin
temperature - ambient temperature, in C
distance    - maximun measuring distance, in cm
*/
HCSR04 ultrasonicSensor(trigPin, echoPin, 2, 400);

void setup()
{
  delay_millis = 1000 / sample_rate;
  Serial.begin(115200);
  Serial1.begin (115200);

  ultrasonicSensor.begin(); //set trigger as output & echo pin as input
}

void loop()
{
//  distance = ultrasonicSensor.getDistance();
//
//  delay(50);                                             //wait 50msec or more, until echo from previous measurement disappears


  distance = ultrasonicSensor.getMedianFilterDistance(); //pass 3 measurements through median filter, better result on moving obstacles

  if (distance != HCSR04_OUT_OF_RANGE)
  {
    Serial.print(distance, 1);
    Serial.println(F(" cm, filtered"));
  }
  else
  {
    Serial.println(F("out of range, filtered"));
  }

  d1 = (distance * 10);
  ultrasonicSensor.setTemperature(22);                 //set air temperature to compensate change in speed of sound

  int numValues = NUM_VALUES;
  int serialArrayLen = (numValues*SERIAL_LEN) + numValues;
  char serialArrayFull[serialArrayLen] = {};
  char serialArrayElement[SERIAL_LEN] = {};

  frame_amount = frame_amount+1;
  frame_amount = frame_amount % num_frames;
  itoa(frame_amount, serialArrayElement, 10); //Turn value into a character array

  strcat( serialArrayFull, serialArrayElement );
  strcat( serialArrayFull, "/" );

  char serialArrayElement2[SERIAL_LEN] = {};
  itoa(d1, serialArrayElement2, 10); //Turn value into a character array

  strcat( serialArrayFull, serialArrayElement2 );
//  if (!HCSR04_OUT_OF_RANGE)
  Serial1.write( serialArrayFull, sizeof(serialArrayFull) );

  delay(delay_millis);                                            //serial refresh rate
}

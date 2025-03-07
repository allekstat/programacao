void setup(void){
    #define VERMELHO 0
    #define AMARELO 1
    #define VERDE 2
    #define BOTAO 3
    #define VERMELHO_P 4
    #define VERDE_P 5
	pinMode(VERMELHO, OUTPUT);
    pinMode(AMARELO, OUTPUT);
    pinMode(VERDE, OUTPUT);
    pinMode(BOTAO, INPUT);
    pinMode(VERMELHO_P, OUTPUT);
	pinMode(VERDE_P, OUTPUT);
	digitalWrite(VERMELHO_P, HIGH);
	digitalWrite(VERDE, HIGH);
}

void loop(void){
	while (digitalRead(BOTAO) == LOW);
	delay(1000);
	digitalWrite(VERDE, LOW);
	digitalWrite(AMARELO, HIGH);
	delay(5000);
	digitalWrite(AMARELO, LOW);
	digitalWrite(VERMELHO, HIGH);
	delay(3000);
	digitalWrite(VERMELHO_P, LOW);
	digitalWrite(VERDE_P, HIGH);
	delay(15000);
	digitalWrite(VERDE_P, LOW);
	for (int i = 0; i < 5; i++){
		digitalWrite(VERMELHO_P, HIGH);
		delay(500);
		digitalWrite(VERMELHO_P, LOW);
		delay(500);
	}
	delay(2000);
	digitalWrite(VERMELHO, LOW);
	digitalWrite(VERDE, HIGH);
	delay(5000);
}

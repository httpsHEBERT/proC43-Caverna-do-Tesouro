class Security {

    constructor(){

        this.access1 = createInput("").attribute("placeholder", "               Código 1");
        this.access1.position(width/2-470, height/2);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Verificar');
        this.button1.position(this.access1.x+54, height/2+37);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("").attribute("placeholder", "               Código 2");
        this.access2.position(width/2-86, height/2);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Verificar');
        this.button2.position(this.access2.x+54, height/2+37);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("").attribute("placeholder", "               Código 3");
        this.access3.position(width/2+290, height/2);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Verificar');
        this.button3.position(this.access3.x+54, height/2+37);
        this.button3.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                if(score < 3){
                    correct.play();
                }else{
                    theme.pause();
                    jump.loop();
                    win.play();
                }
            }else{
                error.play();
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                if(score < 3){
                    correct.play();
                }else{
                    theme.pause();
                    jump.loop();
                    win.play();
                }
            }else{
                error.play();
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
                if(score < 3){
                    correct.play();
                }else{
                    theme.pause();
                    jump.loop();
                    win.play();
                }
            }else{
                error.play();
            }
        });
    }
}

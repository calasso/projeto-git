class CalcController {
    //uma classe é conjunto de atributos e métodos (variáveis e funções)
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._datecEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        // colocar no console do browser para visualizar os elementos: 
        // dir(document)
        // window
        this.setDisplayDateTime();
      
        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);

    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short", //ou "long"
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        returnthis._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._datecEl.innerHTML;
    }

    set displayDate(value){
        return this._datecEl.innerHTML = value;
    }

    get displayCalc(){
        return this.this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value; 
    }
    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value; 
    }
}


class ExpressError extends Error {
    constructor(messaje, error){
        super()
        this.message = messaje;
        this.error = error;
        console.log(this.stack)
    }
} 

class BOException extends Error {

    constructor(message:any) {
        super(message);
        this.name = 'Error';
        this.message=message;
    }
}

module.exports = BOException;
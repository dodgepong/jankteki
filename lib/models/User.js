class User {
    constructor(savedUser) {
        this.name = savedUser.name;
        this.notes = savedUser.notes;
    }

    get summary() {
        var lines = this.notes.split(/\r?\n/);
        return lines ? lines[0] : this.notes;
    }

    toString() {
        return '<User: ' + this.name + '>';
    }
}

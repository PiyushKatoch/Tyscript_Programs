export class person {
    private n: string;
    private add: string;
    
    get get_name(): string {
        return this.n;
    }

    get get_address(): string {
        return this.add;
    }

    set get_name(name: string) {
        this.n = name;
    }


    set get_address(a: string) {
        this.add = a;
    }

    tostring(): string {
        var y = 'Name : ' + this.n + '; Address  : ' + this.add
        return (y); 
     }
}

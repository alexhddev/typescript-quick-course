
function logInvocation(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
    const className = target.constructor.name;
    let originalMethod = descriptor.value;
    descriptor.value = async function(...args: any[]) {
        console.log(`${className}#${propertyKey} called with ${JSON.stringify(args)}`)
        const result = await originalMethod.apply(this, args);
        console.log(`${className}#${propertyKey} returned ${JSON.stringify(result)}`)
    }
}


export interface IServer {

    startServer(): void
    stopServer(): void
}

class Server implements IServer{

    public port: number;
    public address: string;

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    async startServer(){
        const data = await this.getData(123);
        console.log(`Starting server at: ${this.address}: ${this.port}`)
    }

    stopServer(): void {}

    @logInvocation
    async getData(id: number): Promise<string>{
        return 'some SPecial Data'
    }

}

const someServer: IServer = new Server(8080, 'localhost');
someServer.startServer();

/**
 * Transform callback to promises example:
 *     public async getToken(tokenId: string): Promise<SessionToken | undefined> {
        return new Promise((resolve, reject) => {
            this.nedb.find({ tokenId: tokenId }, (err: Error, docs: any[]) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(docs)
                }
            })
        });
    }
 */
